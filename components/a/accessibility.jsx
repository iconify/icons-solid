import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v1ov_2b_c.css';
import '../../css/x/xirk37stl.css';
import '../../css/a/ab8gjdsma.css';
import '../../css/q/qzwmmk9uh.css';
import '../../css/f/ffy85mbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v1ov_2b_c"/><path class="xirk37stl"/><path class="ab8gjdsma"/><path class="qzwmmk9uh"/><path class="ffy85mbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:accessibility"} {...others} />);
}

export default Component;
