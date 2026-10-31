import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/w/wh6g8y9dh.css';
import '../../css/m/m_rdetrma.css';
import '../../css/n/n8vvg36yw.css';
import '../../css/g/gp3-_cbil.css';
import '../../css/n/napck_6nk.css';
import '../../css/r/rg-3zf5pr.css';
import '../../css/y/y1dnsq1df.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path clip-rule="evenodd" class="wh6g8y9dh"/><path clip-rule="evenodd" class="m_rdetrma"/><path class="n8vvg36yw"/><path class="gp3-_cbil"/><path class="napck_6nk"/><path class="rg-3zf5pr"/><path class="y1dnsq1df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:box-open-pop"} {...others} />);
}

export default Component;
