import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ytiitwb2g.css';
import '../../css/m/mw76hgbhi.css';
import '../../css/x/xmoxvtbak.css';
import '../../css/e/elgjjibcr.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ytiitwb2g"/><path class="mw76hgbhi wm-shadow"/><path class="xmoxvtbak"/><path class="elgjjibcr"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:monitor-off"} {...others} />);
}

export default Component;
