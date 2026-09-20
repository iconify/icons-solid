import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1yzn8b3d.css';
import '../../css/v/vkrhsz27r.css';

const viewBox = {"width":400,"height":400};
const content = `<g class="ft5dv1b6b"><path class="n1yzn8b3d"/><path clip-rule="evenodd" class="vkrhsz27r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:miro-dark"} {...others} />);
}

export default Component;
