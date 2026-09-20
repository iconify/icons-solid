import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wu1i7b1lc.css';
import '../../css/o/ogaq-nb0k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wu1i7b1lc"/><path class="ogaq-nb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:wifi-secure-connection"} {...others} />);
}

export default Component;
