import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw0uamblc.css';
import '../../css/c/c3oi41ban.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/w/wrvqot0ph.css';
import '../../css/z/z8ypd6j8d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fw0uamblc"/><path class="c3oi41ban"/><g class="kdz4acc8r"><path class="wrvqot0ph"/><path class="z8ypd6j8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:airplane"} {...others} />);
}

export default Component;
