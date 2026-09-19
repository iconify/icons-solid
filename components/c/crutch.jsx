import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn-3s1buo.css';
import '../../css/n/n9a9kbbjh.css';
import '../../css/x/xpw5-obmc.css';
import '../../css/l/l28ezqbrz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sn-3s1buo"/><path class="n9a9kbbjh"/><path class="xpw5-obmc"/><path class="l28ezqbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:crutch"} {...others} />);
}

export default Component;
