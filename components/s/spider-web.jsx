import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/ko4yjcn3s.css';
import '../../css/c/c89s_kb9x.css';
import '../../css/i/ihz715blo.css';
import '../../css/h/h9hqozbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ko4yjcn3s"/><path class="c89s_kb9x"/><path class="ihz715blo"/><path class="h9hqozbfx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:spider-web"} {...others} />);
}

export default Component;
