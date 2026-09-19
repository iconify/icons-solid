import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x6n8wz5ke.css';
import '../../css/s/s-slj5b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="x6n8wz5ke"/><path class="s-slj5b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:transfer-outline"} {...others} />);
}

export default Component;
