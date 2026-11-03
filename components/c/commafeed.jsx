import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scv3-lbfi.css';
import '../../css/z/zlknd4b1p.css';
import '../../css/o/o6k9xwbor.css';

const viewBox = {"width":6.563,"height":6.563};
const content = `<rect class="scv3-lbfi"/><path class="zlknd4b1p"/><path class="o6k9xwbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:commafeed"} {...others} />);
}

export default Component;
