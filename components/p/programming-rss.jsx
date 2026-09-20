import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz2p-gb2y.css';
import '../../css/q/qlm8aybxt.css';
import '../../css/l/l8l993bhg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uz2p-gb2y"/><path class="qlm8aybxt"/><path class="l8l993bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:programming-rss"} {...others} />);
}

export default Component;
