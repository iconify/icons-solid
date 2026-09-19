import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w63i2sb5q.css';
import '../../css/f/f6sqxlbwl.css';
import '../../css/j/j2p94mlao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w63i2sb5q"/><path class="f6sqxlbwl"/><path class="j2p94mlao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layers-down-right-filled"} {...others} />);
}

export default Component;
