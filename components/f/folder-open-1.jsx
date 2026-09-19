import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q0h-smbqd.css';
import '../../css/a/a9vqcdbes.css';
import '../../css/z/zpu_ag60e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="q0h-smbqd"/><path class="a9vqcdbes"/><path class="zpu_ag60e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:folder-open-1"} {...others} />);
}

export default Component;
