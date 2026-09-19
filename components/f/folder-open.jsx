import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q0h-smbqd.css';
import '../../css/l/lkxv1d43v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="q0h-smbqd"/><path class="lkxv1d43v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:folder-open"} {...others} />);
}

export default Component;
