import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/n/neu5fd5mv.css';
import '../../css/h/hplk2-5xc.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG1IJa4diR"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="neu5fd5mv"/><path class="hplk2-5xc"/></g></mask></defs><circle mask="url(#SVG1IJa4diR)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:flag-circle-filled"} {...others} />);
}

export default Component;
