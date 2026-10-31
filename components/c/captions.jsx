import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i_53qib5v.css';
import '../../css/v/vkgg09bpx.css';
import '../../css/e/euj49csjz.css';
import '../../css/y/yd-bdcbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i_53qib5v"/><path class="vkgg09bpx wm-shine"/><path class="euj49csjz wm-k"/><path class="wm-a yd-bdcbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:captions"} {...others} />);
}

export default Component;
