import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqp8i0b_e.css';
import '../../css/u/u1mrfxw1o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yqp8i0b_e"/><path class="u1mrfxw1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hierarchy-3"} {...others} />);
}

export default Component;
