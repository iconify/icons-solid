import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu2tambpg.css';
import '../../css/v/vdxgplb2v.css';
import '../../css/p/p6uep2bvw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hu2tambpg"/><path clip-rule="evenodd" class="vdxgplb2v"/><path class="p6uep2bvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tablet-capsule"} {...others} />);
}

export default Component;
