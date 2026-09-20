import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t9lnp1q9o.css';
import '../../css/x/xd9yqtb7z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="t9lnp1q9o"/><path class="xd9yqtb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:incognito-mode"} {...others} />);
}

export default Component;
