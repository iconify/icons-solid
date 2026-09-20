import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtvqdnbgg.css';
import '../../css/t/t_gkyi4pk.css';
import '../../css/t/tbw9drmah.css';
import '../../css/t/twhj22bal.css';
import '../../css/l/l8bz6bbdc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dtvqdnbgg"/><path class="t_gkyi4pk"/><path class="tbw9drmah"/><path class="twhj22bal"/><path class="l8bz6bbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:threat-folder"} {...others} />);
}

export default Component;
