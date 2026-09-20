import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/w/wp_t_lhzr.css';
import '../../css/z/zg7blmbnp.css';
import '../../css/i/iazqm-bml.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGLPdB9fiN"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="wp_t_lhzr"/><path class="zg7blmbnp"/><path class="iazqm-bml"/></g></mask></defs><circle mask="url(#SVGLPdB9fiN)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:raise-hand-circle-filled"} {...others} />);
}

export default Component;
