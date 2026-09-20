import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r3ks1ccfa.css';
import '../../css/x/xdsp00vit.css';
import '../../css/h/honf3zq8t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="r3ks1ccfa"/><circle class="xdsp00vit"/><path class="honf3zq8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-browser-search-search-window-glass-app-code-programming-query-find-magnifying-apps"} {...others} />);
}

export default Component;
