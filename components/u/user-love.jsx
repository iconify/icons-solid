import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j0d1e4bgb.css';
import '../../css/s/s10b5obbo.css';
import '../../css/u/uebsytbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="j0d1e4bgb"/><path class="s10b5obbo"/><path class="uebsytbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-love"} {...others} />);
}

export default Component;
