import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s79cvv-0n.css';

const viewBox = {"width":220.93,"height":131.94};
const content = `<defs><symbol id="SVG6W14HcPs" viewBox="0 0 220.93 131.94"><path class="s79cvv-0n"/></symbol></defs><use width="220.93" height="131.94" href="#SVG6W14HcPs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:marqeta"} {...others} />);
}

export default Component;
