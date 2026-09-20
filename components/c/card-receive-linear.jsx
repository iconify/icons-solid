import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j8ay_ac4z.css';
import '../../css/u/uwaa3xb6z.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/i/ic-2n6n4h.css';
import '../../css/a/arfwosbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j8ay_ac4z"/><path class="uwaa3xb6z"/><path class="ktpncgb0v"/><path class="ic-2n6n4h"/><path class="arfwosbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-receive-linear"} {...others} />);
}

export default Component;
