import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hb7nrobwg.css';
import '../../css/o/o_r27487m.css';
import '../../css/q/q--r32voc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hb7nrobwg"/><rect class="o_r27487m"/><path class="q--r32voc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-copy-clipboard-copy-cut-paste"} {...others} />);
}

export default Component;
