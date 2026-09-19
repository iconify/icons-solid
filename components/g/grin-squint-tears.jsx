import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x_-he3egs.css';
import '../../css/l/lktlxngct.css';
import '../../css/n/ni1-kfgdq.css';
import '../../css/q/qga9xeyyw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="x_-he3egs"/><path class="lktlxngct"/><path class="ni1-kfgdq"/><path class="qga9xeyyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-squint-tears"} {...others} />);
}

export default Component;
