import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/homsdbwhd.css';
import '../../css/t/t1jnwgboo.css';
import '../../css/w/wv0ivsrrm.css';
import '../../css/u/ulw-1mb-v.css';
import '../../css/p/pid5ycb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="homsdbwhd"/><path class="t1jnwgboo wm-shine"/><path class="wm-k wv0ivsrrm"/><path class="ulw-1mb-v wm-a"/><path class="pid5ycb_v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:feather"} {...others} />);
}

export default Component;
