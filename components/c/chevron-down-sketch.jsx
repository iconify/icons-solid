import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hlf7cfptm.css';
import '../../css/c/c_loxking.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hlf7cfptm"/><path class="c_loxking"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-down-sketch"} {...others} />);
}

export default Component;
