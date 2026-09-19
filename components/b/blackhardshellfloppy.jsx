import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1a4_5bhx.css';
import '../../css/f/f0n61bjwo.css';
import '../../css/r/rdndzccdo.css';
import '../../css/v/vpbsv_3oy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q1a4_5bhx"/><path class="f0n61bjwo"/><path class="rdndzccdo"/><path class="vpbsv_3oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackhardshellfloppy"} {...others} />);
}

export default Component;
