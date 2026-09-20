import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/or5gfliir.css';
import '../../css/a/aibvjofbc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="or5gfliir"/><path class="aibvjofbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:shipping-box-2"} {...others} />);
}

export default Component;
