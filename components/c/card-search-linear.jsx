import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wr4181b4u.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/a/arfwosbro.css';
import '../../css/a/aaakgqotp.css';
import '../../css/i/i8e2akblu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wr4181b4u"/><path class="ktpncgb0v"/><path class="arfwosbro"/><circle class="aaakgqotp"/><path class="i8e2akblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-search-linear"} {...others} />);
}

export default Component;
