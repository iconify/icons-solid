import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sflihvb5d.css';
import '../../css/y/yshok5c7m.css';
import '../../css/c/cz5az3b_r.css';
import '../../css/f/fo2gbpb3t.css';
import '../../css/v/vu1vtxzry.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="sflihvb5d"/><path class="yshok5c7m"/><path class="cz5az3b_r"/><path class="fo2gbpb3t"/><path class="vu1vtxzry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-rewire"} {...others} />);
}

export default Component;
