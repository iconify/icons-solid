import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l__hojbyl.css';
import '../../css/h/hrxhp9b1x.css';
import '../../css/d/d6mqo8bss.css';
import '../../css/q/qp9ttxbyq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l__hojbyl"/><path class="hrxhp9b1x"/><path class="d6mqo8bss"/><path class="qp9ttxbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:firebase"} {...others} />);
}

export default Component;
