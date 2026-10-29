import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/djiqt-b-p.css';
import '../../css/v/vfmfabckk.css';
import '../../css/n/nrf4-abjf.css';
import '../../css/e/emha3wbqe.css';
import '../../css/f/f5cf9ixua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="djiqt-b-p wm-k"/><path class="vfmfabckk wm-s"/><path class="nrf4-abjf wm-shadow"/><path class="emha3wbqe wm-k"/><path class="f5cf9ixua wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-check-engrave"} {...others} />);
}

export default Component;
