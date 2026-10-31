import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wjpcdrbil.css';
import '../../css/d/do_gaobru.css';
import '../../css/h/h3pi6ibxi.css';
import '../../css/c/clwivwvku.css';
import '../../css/y/ydkl_3iyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wjpcdrbil"/><path class="do_gaobru"/><path class="h3pi6ibxi wm-shine"/><path class="clwivwvku wm-k"/><path class="wm-a ydkl_3iyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:certificate"} {...others} />);
}

export default Component;
