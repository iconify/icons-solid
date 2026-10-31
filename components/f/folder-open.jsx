import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lzylc9sbx.css';
import '../../css/t/tbe0i4byx.css';
import '../../css/x/x2r35c5di.css';
import '../../css/j/jc7jrfgwn.css';
import '../../css/t/tc8hdqbuk.css';
import '../../css/y/ypz1tpn5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lzylc9sbx wm-shadow"/><path class="tbe0i4byx"/><path class="x2r35c5di"/><path class="jc7jrfgwn"/><path class="tc8hdqbuk"/><path class="ypz1tpn5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-open"} {...others} />);
}

export default Component;
