import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tcfao_bkt.css';
import '../../css/t/tln-w-bzx.css';
import '../../css/g/gnp1xehnk.css';
import '../../css/y/y4x57vuri.css';
import '../../css/n/nwgnfjrew.css';
import '../../css/z/z7td39bxf.css';
import '../../css/y/ygupgkkvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tcfao_bkt"/><path class="tln-w-bzx"/><path class="gnp1xehnk wm-shine"/><path class="wm-k y4x57vuri"/><path class="nwgnfjrew wm-a"/><path class="z7td39bxf"/><path class="ygupgkkvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:messages"} {...others} />);
}

export default Component;
