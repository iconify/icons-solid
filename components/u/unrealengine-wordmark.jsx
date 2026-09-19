import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lh8eyg1vb.css';
import '../../css/i/i061d9bsi.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="d2kvgvbvc"><path class="lh8eyg1vb"/><path class="i061d9bsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:unrealengine-wordmark"} {...others} />);
}

export default Component;
