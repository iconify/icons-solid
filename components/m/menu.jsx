import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dqueh1r5k.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dqueh1r5k"/><path class="wm-deco yuobg4bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:menu"} {...others} />);
}

export default Component;
