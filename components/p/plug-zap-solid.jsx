import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hd-prbc5x.css';
import '../../css/r/r9mzzgbcj.css';
import '../../css/y/ymcuixbps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="hd-prbc5x"/><path class="r9mzzgbcj wm-a"/><path class="wm-s ymcuixbps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plug-zap-solid"} {...others} />);
}

export default Component;
