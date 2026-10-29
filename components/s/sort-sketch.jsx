import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f4fq62boi.css';
import '../../css/o/oos9n2b5s.css';
import '../../css/o/oiiu6_b2q.css';
import '../../css/v/va5hn9blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f4fq62boi wm-k"/><path class="oos9n2b5s wm-a"/><path class="oiiu6_b2q wm-k"/><path class="va5hn9blj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sort-sketch"} {...others} />);
}

export default Component;
