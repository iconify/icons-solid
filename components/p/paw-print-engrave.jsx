import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g296x_kvp.css';
import '../../css/k/kfgqakb9z.css';
import '../../css/r/r1jw-m2vv.css';
import '../../css/e/eqaz9db1b.css';
import '../../css/o/ozvu4bk6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g296x_kvp wm-k"/><path class="kfgqakb9z wm-a"/><path class="r1jw-m2vv wm-shadow"/><path class="eqaz9db1b wm-k"/><path class="ozvu4bk6l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paw-print-engrave"} {...others} />);
}

export default Component;
