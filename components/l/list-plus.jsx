import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xe65wvb-d.css';
import '../../css/c/c3wgojkty.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k xe65wvb-d"/><path class="c3wgojkty wm-s"/><path class="wm-deco yuobg4bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-plus"} {...others} />);
}

export default Component;
