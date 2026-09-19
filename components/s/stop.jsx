import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/t/tydx89bkk.css';
import '../../css/m/mth_jkjsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="tydx89bkk"/><path class="mth_jkjsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:stop"} {...others} />);
}

export default Component;
