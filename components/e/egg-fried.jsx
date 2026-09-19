import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oi6d-5_ph.css';
import '../../css/f/ftbh39b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="oi6d-5_ph"/><path class="ftbh39b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:egg-fried"} {...others} />);
}

export default Component;
