import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm2ylqbxh.css';
import '../../css/r/rk07ix9jr.css';
import '../../css/m/m3uyw9bne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gm2ylqbxh"/><path clip-rule="evenodd" class="rk07ix9jr"/><path class="m3uyw9bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:document-certificate-flat"} {...others} />);
}

export default Component;
