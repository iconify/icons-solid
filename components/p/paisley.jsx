import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mo2acwx1s.css';
import '../../css/b/btz3k8bew.css';
import '../../css/j/jamluzjvt.css';
import '../../css/y/yxa4pbbgv.css';
import '../../css/y/ynqmjxh6x.css';
import '../../css/o/o3qx-w_0y.css';
import '../../css/g/g7tecfbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mo2acwx1s"/><path class="btz3k8bew"/><path class="jamluzjvt wm-shine"/><path class="wm-k yxa4pbbgv"/><path class="wm-a ynqmjxh6x"/><path class="o3qx-w_0y wm-s"/><path class="g7tecfbpx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paisley"} {...others} />);
}

export default Component;
