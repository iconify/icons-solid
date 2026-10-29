import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rbb3a5bie.css';
import '../../css/k/kjj_5s8ct.css';
import '../../css/a/ao54is99w.css';
import '../../css/k/k84vtocml.css';
import '../../css/b/bropegbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rbb3a5bie wm-k"/><path class="kjj_5s8ct wm-a"/><path class="ao54is99w wm-shadow"/><path class="k84vtocml wm-k"/><path class="bropegbcq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scale-engrave"} {...others} />);
}

export default Component;
