import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xbsr68buh.css';
import '../../css/p/p2blggb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="xbsr68buh"/><path class="p2blggb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:dart-logo"} {...others} />);
}

export default Component;
