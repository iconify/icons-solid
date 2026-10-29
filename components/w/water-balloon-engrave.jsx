import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hdftlebhb.css';
import '../../css/o/o_i4znb3n.css';
import '../../css/p/pfunrccay.css';
import '../../css/k/kfb2hf1uo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hdftlebhb wm-k"/><path class="o_i4znb3n wm-shadow"/><path class="pfunrccay wm-k"/><path class="kfb2hf1uo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:water-balloon-engrave"} {...others} />);
}

export default Component;
