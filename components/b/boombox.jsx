import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c2hprkbfn.css';
import '../../css/w/wl8ukgbyz.css';
import '../../css/z/z-pge_rrg.css';
import '../../css/u/ul8tohbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c2hprkbfn"/><path class="wl8ukgbyz"/><path class="z-pge_rrg"/><path class="ul8tohbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:boombox"} {...others} />);
}

export default Component;
