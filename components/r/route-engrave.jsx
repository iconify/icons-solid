import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xhp6tur6s.css';
import '../../css/i/ia6ikvh9r.css';
import '../../css/n/n0mw1qblu.css';
import '../../css/o/odnmdzi_x.css';
import '../../css/d/dorpla9vi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xhp6tur6s"/><path class="ia6ikvh9r wm-a"/><path class="n0mw1qblu wm-shadow"/><path class="odnmdzi_x wm-k"/><path class="dorpla9vi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:route-engrave"} {...others} />);
}

export default Component;
