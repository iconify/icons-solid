import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p61-0ivql.css';
import '../../css/k/ki1zkpbpv.css';
import '../../css/g/govy24b2c.css';
import '../../css/t/td_7qkq1w.css';
import '../../css/w/w15xar7bj.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p61-0ivql"/><path class="ki1zkpbpv"/><path class="govy24b2c"/><path class="td_7qkq1w"/><path class="w15xar7bj"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-guadeloupe"} {...others} />);
}

export default Component;
