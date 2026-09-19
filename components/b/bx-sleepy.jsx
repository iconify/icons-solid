import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqbkv8u2i.css';
import '../../css/s/s318qib4y.css';
import '../../css/b/bj4ojtbak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqbkv8u2i"/><ellipse class="s318qib4y"/><path class="bj4ojtbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-sleepy"} {...others} />);
}

export default Component;
