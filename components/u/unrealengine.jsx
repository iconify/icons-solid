import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cn08i3b8i.css';
import '../../css/z/zxfkkwbnu.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="d2kvgvbvc"><path class="cn08i3b8i"/><path class="zxfkkwbnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:unrealengine"} {...others} />);
}

export default Component;
