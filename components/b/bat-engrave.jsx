import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ru8mufbum.css';
import '../../css/p/p93l8_x3q.css';
import '../../css/m/ms5fzqbco.css';
import '../../css/s/sb3ejhbzu.css';
import '../../css/k/kg8q4t51v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ru8mufbum wm-k"/><path class="p93l8_x3q wm-a"/><path class="ms5fzqbco wm-shadow"/><path class="sb3ejhbzu wm-k"/><path class="kg8q4t51v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bat-engrave"} {...others} />);
}

export default Component;
