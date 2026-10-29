import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ib4oyr92q.css';
import '../../css/g/gwmckxxys.css';
import '../../css/f/fft2s9byp.css';
import '../../css/y/yqu3e8q5m.css';
import '../../css/j/j6807mbiw.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/q/q8vdfbk1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ib4oyr92q wm-k"/><path class="gwmckxxys wm-a"/><path class="fft2s9byp wm-s"/><path class="wm-shadow yqu3e8q5m"/><path class="j6807mbiw wm-k"/><path class="wm-a z4bbp2bhq"/><path class="q8vdfbk1f wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-cog-engrave"} {...others} />);
}

export default Component;
