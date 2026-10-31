import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h22q30bqx.css';
import '../../css/s/s6tfabbgr.css';
import '../../css/u/u9l6lfbri.css';
import '../../css/h/hjmtsxb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h22q30bqx wm-shadow"/><path class="s6tfabbgr wm-shadow"/><path class="u9l6lfbri"/><path class="hjmtsxb_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:house-wifi"} {...others} />);
}

export default Component;
