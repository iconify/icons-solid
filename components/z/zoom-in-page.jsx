import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhwu-ob_j.css';
import '../../css/b/b0px3ts2v.css';
import '../../css/d/dg-xcybwq.css';
import '../../css/x/xuqei-mrd.css';
import '../../css/b/bluwvfb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rhwu-ob_j"/><path class="b0px3ts2v"/><path class="dg-xcybwq"/><path class="xuqei-mrd"/><path class="bluwvfb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:zoom-in-page"} {...others} />);
}

export default Component;
