import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ynmcfyb2o.css';
import '../../css/p/pxs307brl.css';
import '../../css/f/f26bn-hui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ynmcfyb2o"/><path class="pxs307brl"/><path class="f26bn-hui wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:megaphone"} {...others} />);
}

export default Component;
