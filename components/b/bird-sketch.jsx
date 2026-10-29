import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r-ye7do_q.css';
import '../../css/j/j9w0z1j2s.css';
import '../../css/f/fwj0tvb2f.css';
import '../../css/d/dsl3x27ur.css';
import '../../css/f/ffez6rw7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r-ye7do_q"/><path class="j9w0z1j2s wm-k"/><path class="fwj0tvb2f wm-a"/><path class="dsl3x27ur wm-k"/><path class="ffez6rw7v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bird-sketch"} {...others} />);
}

export default Component;
