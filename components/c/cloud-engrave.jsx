import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/do26crbva.css';
import '../../css/f/ftut6hr7j.css';
import '../../css/c/cvilh7buk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="do26crbva"/><path class="ftut6hr7j wm-shadow"/><path class="cvilh7buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-engrave"} {...others} />);
}

export default Component;
