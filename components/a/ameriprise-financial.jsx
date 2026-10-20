import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2s8y9bcp.css';
import '../../css/p/pnjckj3dw.css';

const viewBox = {"width":73.721,"height":25.069};
const content = `<path class="l2s8y9bcp"/><path class="pnjckj3dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ameriprise-financial"} {...others} />);
}

export default Component;
