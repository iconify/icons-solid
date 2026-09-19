import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yws1wvrcm.css';
import '../../css/n/nc-c2sb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yws1wvrcm"/><path class="nc-c2sb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:switch-on"} {...others} />);
}

export default Component;
