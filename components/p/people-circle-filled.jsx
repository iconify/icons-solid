import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/u/uaat9ufjy.css';
import '../../css/n/nt938zbgh.css';
import '../../css/g/gpl9ofb_e.css';
import '../../css/c/c5n_coblh.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGJrDP9d0b"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="uaat9ufjy"/><path class="nt938zbgh"/><path class="gpl9ofb_e"/><path class="c5n_coblh"/></g></mask></defs><circle mask="url(#SVGJrDP9d0b)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:people-circle-filled"} {...others} />);
}

export default Component;
