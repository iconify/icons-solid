import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uck16j49o.css';
import '../../css/v/vn62to4vy.css';
import '../../css/h/hns9yhbok.css';
import '../../css/k/kqd-wvb4e.css';
import '../../css/j/jz9lg4l7w.css';
import '../../css/m/mg0dmqb6d.css';
import '../../css/t/tbxfsnbba.css';
import '../../css/w/wbonv4ckl.css';
import '../../css/m/m7zqksb9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uck16j49o"/><path class="vn62to4vy"/><path class="hns9yhbok"/><path class="kqd-wvb4e"/><path class="jz9lg4l7w"/><line x1="12" x2="20" y1="6" y2="6"/><line x1="29" x2="37" y1="6" y2="6"/><rect class="mg0dmqb6d"/><rect class="tbxfsnbba"/><path class="wbonv4ckl"/><path class="m7zqksb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diving-bottle"} {...others} />);
}

export default Component;
