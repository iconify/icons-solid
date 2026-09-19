import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5wi-ryfk.css';
import '../../css/n/nwfb1ibqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5wi-ryfk"/><path class="nwfb1ibqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-alarm-add"} {...others} />);
}

export default Component;
