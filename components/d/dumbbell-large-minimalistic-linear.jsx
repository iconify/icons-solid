import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yhwtfcbit.css';
import '../../css/n/np8ymybnq.css';
import '../../css/l/l19alibyj.css';
import '../../css/b/b7fd3hbhl.css';
import '../../css/r/rcu-dxg4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yhwtfcbit"/><path class="np8ymybnq"/><path class="l19alibyj"/><path class="b7fd3hbhl"/><path class="rcu-dxg4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-linear"} {...others} />);
}

export default Component;
