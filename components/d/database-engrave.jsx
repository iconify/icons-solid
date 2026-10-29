import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f0drbx22f.css';
import '../../css/p/p4dwao03s.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i-7a-zb9i.css';
import '../../css/o/o53n0ib2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f0drbx22f"/><path class="p4dwao03s wm-shadow"/><path class="y95393_dl"/><path class="i-7a-zb9i"/><path class="o53n0ib2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-engrave"} {...others} />);
}

export default Component;
