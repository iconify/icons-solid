import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hs1vj9b-w.css';
import '../../css/b/b9uz1p94q.css';
import '../../css/s/sd-hmubzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hs1vj9b-w"/><path class="b9uz1p94q wm-shadow"/><path class="sd-hmubzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dino-engrave"} {...others} />);
}

export default Component;
