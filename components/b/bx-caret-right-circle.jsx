import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkamcyd2s.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkamcyd2s"/><path class="wqbkv8u2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-caret-right-circle"} {...others} />);
}

export default Component;
