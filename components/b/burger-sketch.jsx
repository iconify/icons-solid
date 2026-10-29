import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ff4jdybea.css';
import '../../css/g/gtbtb4krd.css';
import '../../css/g/gqeu1eb-b.css';
import '../../css/p/p-js957rr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ff4jdybea wm-k"/><path class="gtbtb4krd wm-a"/><path class="gqeu1eb-b wm-k"/><path class="p-js957rr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:burger-sketch"} {...others} />);
}

export default Component;
