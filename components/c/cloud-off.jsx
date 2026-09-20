import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/emxrn1bsn.css';
import '../../css/j/jyo_x8rvu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="emxrn1bsn"/><path class="jyo_x8rvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:cloud-off"} {...others} />);
}

export default Component;
