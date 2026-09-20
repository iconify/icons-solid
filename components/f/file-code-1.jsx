import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jk-7otgew.css';
import '../../css/v/vl4n6h0hp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jk-7otgew"/><path class="vl4n6h0hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:file-code-1"} {...others} />);
}

export default Component;
