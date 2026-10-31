import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hgcxjebbo.css';
import '../../css/k/k_yzbeqck.css';
import '../../css/t/tni-dhcwu.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/m/msfwckeky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hgcxjebbo"/><path class="k_yzbeqck"/><path class="tni-dhcwu wm-shine"/><path class="o9wp5rbfh wm-k"/><path class="msfwckeky wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-woman-bun"} {...others} />);
}

export default Component;
