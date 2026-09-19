import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y1usy_iqb.css';
import '../../css/x/xr_0osbry.css';
import '../../css/t/tr09_dpjp.css';
import '../../css/r/rxtn1lbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y1usy_iqb"/><path class="xr_0osbry"/><path class="tr09_dpjp"/><path class="rxtn1lbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:burning-cd"} {...others} />);
}

export default Component;
