import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziltb3b7d.css';
import '../../css/w/wh9r_4xsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ziltb3b7d"/><path class="wh9r_4xsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hmx"} {...others} />);
}

export default Component;
