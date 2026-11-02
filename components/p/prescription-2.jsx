import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mi0_zib3g.css';
import '../../css/j/j1t6wloyd.css';
import '../../css/y/y99xy_i9j.css';
import '../../css/i/ig7sw-rzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="mi0_zib3g"/><path class="j1t6wloyd"/><path class="y99xy_i9j"/><path class="ig7sw-rzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:prescription-2"} {...others} />);
}

export default Component;
