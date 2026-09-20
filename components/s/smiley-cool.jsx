import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zb5pn5mlm.css';
import '../../css/t/ts59c5bdh.css';
import '../../css/s/s7bradgdl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zb5pn5mlm"/><path class="ts59c5bdh"/><path class="s7bradgdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-cool"} {...others} />);
}

export default Component;
