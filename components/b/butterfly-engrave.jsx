import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a6cwelbwj.css';
import '../../css/e/es45psbqk.css';
import '../../css/b/beoe_ii1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a6cwelbwj"/><path class="es45psbqk wm-shadow"/><path class="beoe_ii1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:butterfly-engrave"} {...others} />);
}

export default Component;
