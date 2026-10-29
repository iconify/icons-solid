import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hgjl9rb9s.css';
import '../../css/s/s0eupibke.css';
import '../../css/j/jzreslb8g.css';
import '../../css/i/ies8h8b4m.css';
import '../../css/c/cy-os_a7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hgjl9rb9s"/><path class="s0eupibke wm-k"/><path class="jzreslb8g wm-a"/><path class="ies8h8b4m wm-k"/><path class="cy-os_a7c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contact-sketch"} {...others} />);
}

export default Component;
