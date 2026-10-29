import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fkfoqunaf.css';
import '../../css/i/i-58-uedr.css';
import '../../css/l/l7ja-xnch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fkfoqunaf"/><path class="i-58-uedr wm-k"/><path class="l7ja-xnch wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:locate-fixed-sketch"} {...others} />);
}

export default Component;
