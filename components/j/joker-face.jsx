import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2q51d2ly.css';
import '../../css/u/uebjgccrr.css';
import '../../css/x/xrw096b8w.css';
import '../../css/d/dqk-opb2i.css';
import '../../css/a/avevmeb3d.css';
import '../../css/j/jr_zdkbga.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u2q51d2ly"/><path clip-rule="evenodd" class="uebjgccrr"/><circle class="xrw096b8w"/><circle class="dqk-opb2i"/><path class="avevmeb3d"/><path clip-rule="evenodd" class="jr_zdkbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:joker-face"} {...others} />);
}

export default Component;
