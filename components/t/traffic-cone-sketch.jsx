import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kqdo--dgf.css';
import '../../css/w/wa-qt0b0c.css';
import '../../css/v/vpv0a08iy.css';
import '../../css/s/syp98vb4f.css';
import '../../css/f/foz_ombwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kqdo--dgf"/><path class="wa-qt0b0c wm-k"/><path class="vpv0a08iy wm-k"/><path class="syp98vb4f wm-k"/><path class="foz_ombwu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:traffic-cone-sketch"} {...others} />);
}

export default Component;
