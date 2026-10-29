import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cvwtfk2zv.css';
import '../../css/r/r-0xcxboy.css';
import '../../css/p/plj1kabpx.css';
import '../../css/j/jqp01sc5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cvwtfk2zv"/><path class="r-0xcxboy wm-a"/><path class="plj1kabpx wm-k"/><path class="jqp01sc5u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:info-circle-sketch"} {...others} />);
}

export default Component;
