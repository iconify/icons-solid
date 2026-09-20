import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nw7urdh7w.css';
import '../../css/w/wwipzbb8j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="nw7urdh7w"/><path class="wwipzbb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-share-hand-lock-give-hand-lock-padlock-secure-security-transfer"} {...others} />);
}

export default Component;
