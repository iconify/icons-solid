import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p16ppujcb.css';
import '../../css/j/js-062bof.css';
import '../../css/p/plqhs8tmi.css';
import '../../css/a/akgwenb9p.css';
import '../../css/q/qxnk23bzr.css';
import '../../css/i/ioyvm-uiv.css';
import '../../css/o/oep-ylnxm.css';
import '../../css/i/i13xuebxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p16ppujcb"/><path class="js-062bof"/><path class="plqhs8tmi wm-shine"/><path class="akgwenb9p wm-k"/><path class="qxnk23bzr wm-a"/><path class="ioyvm-uiv"/><path class="oep-ylnxm"/><path class="i13xuebxi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tree-pine"} {...others} />);
}

export default Component;
