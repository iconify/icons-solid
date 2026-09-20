import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlma8nb5g.css';

const viewBox = {"width":1080,"height":674};
const content = `<path clip-rule="evenodd" class="rlma8nb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:webflow"} {...others} />);
}

export default Component;
