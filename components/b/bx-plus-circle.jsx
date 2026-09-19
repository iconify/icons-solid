import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e78vbih2x.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e78vbih2x"/><path class="wqbkv8u2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-plus-circle"} {...others} />);
}

export default Component;
