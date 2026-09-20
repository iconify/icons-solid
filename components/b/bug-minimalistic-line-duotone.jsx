import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/krfu6kb3q.css';
import '../../css/x/xzpga8tov.css';
import '../../css/w/wdgiifbhr.css';
import '../../css/t/t7vmsybxh.css';
import '../../css/f/f7far5b8y.css';
import '../../css/i/ip6dy4b-s.css';
import '../../css/l/ltrgokn6u.css';
import '../../css/g/gm6pq3bmx.css';
import '../../css/q/qz24znbzh.css';
import '../../css/g/gde9kxtyo.css';
import '../../css/a/a5qj-rbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="krfu6kb3q"/><path class="xzpga8tov"/><path class="wdgiifbhr"/><path class="t7vmsybxh"/><path class="f7far5b8y"/><path class="ip6dy4b-s"/><path class="ltrgokn6u"/><path class="gm6pq3bmx"/><path class="qz24znbzh"/><path class="gde9kxtyo"/><path class="a5qj-rbqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-minimalistic-line-duotone"} {...others} />);
}

export default Component;
