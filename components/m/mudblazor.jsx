import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxvuarbsa.css';
import '../../css/y/yaky7tbun.css';
import '../../css/g/gj4t4ybgi.css';

const viewBox = {"width":1404,"height":1404};
const content = `<path class="nxvuarbsa"/><path class="yaky7tbun"/><path class="gj4t4ybgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mudblazor"} {...others} />);
}

export default Component;
