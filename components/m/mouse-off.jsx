import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0_8ipbhp.css';
import '../../css/s/slmv85b_b.css';
import '../../css/u/ul2onkbvk.css';
import '../../css/y/y789qhdyp.css';
import '../../css/d/dbllshbzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h0_8ipbhp"/><rect class="slmv85b_b"/><path class="ul2onkbvk"/><rect class="y789qhdyp"/><path class="dbllshbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-off"} {...others} />);
}

export default Component;
