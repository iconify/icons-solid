import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/veen_8bxc.css';
import '../../css/q/q8pfntl8k.css';
import '../../css/u/u4-339brq.css';
import '../../css/t/t-i6f8bdi.css';
import '../../css/z/zybwzifyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="veen_8bxc"/><path class="q8pfntl8k wm-k"/><path class="u4-339brq wm-a"/><path class="t-i6f8bdi wm-k"/><path class="wm-a zybwzifyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:warehouse-sketch"} {...others} />);
}

export default Component;
