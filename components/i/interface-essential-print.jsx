import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zchtgcboh.css';
import '../../css/i/i1-lcibyb.css';
import '../../css/i/i5-w2mb4f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zchtgcboh"/><path class="i1-lcibyb"/><path class="i5-w2mb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-print"} {...others} />);
}

export default Component;
