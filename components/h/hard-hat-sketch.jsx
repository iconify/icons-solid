import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i83db182z.css';
import '../../css/d/dwsa8ob3o.css';
import '../../css/p/p0cq4h5-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i83db182z wm-a"/><path class="dwsa8ob3o wm-k"/><path class="p0cq4h5-v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-hat-sketch"} {...others} />);
}

export default Component;
