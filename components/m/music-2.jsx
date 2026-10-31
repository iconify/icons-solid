import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lmwx2op8z.css';
import '../../css/c/cjn6axrjc.css';
import '../../css/y/yc8m6585x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lmwx2op8z"/><path class="cjn6axrjc"/><path class="wm-deco yc8m6585x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:music-2"} {...others} />);
}

export default Component;
