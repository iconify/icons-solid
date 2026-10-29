import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx5a87j6b.css';
import '../../css/d/dsbze7z_a.css';
import '../../css/y/yeictfdey.css';
import '../../css/l/lfc43bcek.css';
import '../../css/v/vr4rrbs1n.css';
import '../../css/v/vwm5xyb1g.css';
import '../../css/o/oqydrd_qt.css';
import '../../css/x/x0kl9_gzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx5a87j6b wm-shadow"/><path class="dsbze7z_a wm-k"/><path class="wm-k yeictfdey"/><path class="lfc43bcek wm-k"/><path class="vr4rrbs1n wm-a"/><rect class="vwm5xyb1g wm-a"/><path class="oqydrd_qt wm-a"/><path class="wm-shine x0kl9_gzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cupid-bow"} {...others} />);
}

export default Component;
