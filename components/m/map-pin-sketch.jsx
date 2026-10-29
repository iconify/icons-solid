import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b0pqdwr_b.css';
import '../../css/b/b5-ak3bmg.css';
import '../../css/h/hkvageoyh.css';
import '../../css/l/l5qqg4j2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b0pqdwr_b"/><path class="b5-ak3bmg wm-k"/><path class="hkvageoyh wm-k"/><path class="l5qqg4j2j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-sketch"} {...others} />);
}

export default Component;
