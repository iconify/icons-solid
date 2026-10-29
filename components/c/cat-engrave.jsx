import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v_hbawbgh.css';
import '../../css/r/rr05tdbqi.css';
import '../../css/f/f0_ic289c.css';
import '../../css/a/ac1m7ezbo.css';
import '../../css/h/h4vcpvbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v_hbawbgh wm-k"/><path class="rr05tdbqi wm-a"/><path class="f0_ic289c wm-shadow"/><path class="ac1m7ezbo wm-k"/><path class="h4vcpvbdh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cat-engrave"} {...others} />);
}

export default Component;
