import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g9cwhbb5j.css';
import '../../css/g/godjt6baw.css';
import '../../css/a/aty4zjtxs.css';
import '../../css/x/xt6fe4b-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g9cwhbb5j"/><path class="godjt6baw wm-a"/><path class="aty4zjtxs wm-k"/><path class="wm-a xt6fe4b-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:luggage-sketch"} {...others} />);
}

export default Component;
