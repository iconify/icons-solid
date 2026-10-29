import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dtuw77bny.css';
import '../../css/a/ak_kr_1qo.css';
import '../../css/n/no_pq6-6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dtuw77bny"/><path class="ak_kr_1qo wm-shadow"/><path class="no_pq6-6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rewind-engrave"} {...others} />);
}

export default Component;
