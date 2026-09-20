import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/ux3j6xbjx.css';
import '../../css/r/rk7vfub3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ux3j6xbjx"/><path class="rk7vfub3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road"} {...others} />);
}

export default Component;
