import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibucxqafe.css';
import '../../css/h/h-a1jcbns.css';
import '../../css/v/v3zwzkbir.css';
import '../../css/d/d-5tpii6j.css';
import '../../css/k/kg5fuhtev.css';
import '../../css/y/yi69zxb9z.css';
import '../../css/o/o7o-1-bfq.css';
import '../../css/g/gfumg6bxi.css';
import '../../css/s/s696m989j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ibucxqafe wm-k"/><path class="h-a1jcbns wm-a"/><path class="v3zwzkbir wm-deco"/><path class="d-5tpii6j wm-k"/><path class="kg5fuhtev wm-a"/><path class="wm-shadow yi69zxb9z"/><path class="o7o-1-bfq wm-shine"/><path class="gfumg6bxi wm-shine"/><path class="s696m989j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folders"} {...others} />);
}

export default Component;
