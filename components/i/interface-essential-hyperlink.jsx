import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlr20m9qu.css';
import '../../css/a/av3hfsqru.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rlr20m9qu"/><path class="av3hfsqru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hyperlink"} {...others} />);
}

export default Component;
