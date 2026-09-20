import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od14k4bxt.css';
import '../../css/n/n-o4sdbun.css';
import '../../css/v/vmk-enbfe.css';
import '../../css/u/u7n5g9--x.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><linearGradient id="SVG6DaOZcwt" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="od14k4bxt"/><stop offset="100%" class="n-o4sdbun"/></linearGradient></defs><path fill="url(#SVG6DaOZcwt)" class="vmk-enbfe"/><path class="u7n5g9--x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:telegram"} {...others} />);
}

export default Component;
