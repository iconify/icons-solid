import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bxy031bkd.css';
import '../../css/s/s7l_ijfrk.css';
import '../../css/o/oo6cd_9qe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="bxy031bkd"/><path class="s7l_ijfrk"/><path class="oo6cd_9qe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:award-05"} {...others} />);
}

export default Component;
