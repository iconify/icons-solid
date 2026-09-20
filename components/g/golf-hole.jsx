import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4w649b9d.css';
import '../../css/q/qp3u7nbhj.css';
import '../../css/t/t3tqarbdc.css';
import '../../css/v/vbiorlbpk.css';
import '../../css/s/s2i99wbpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4w649b9d"/><path class="qp3u7nbhj"/><path class="t3tqarbdc"/><path class="vbiorlbpk"/><path class="s2i99wbpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:golf-hole"} {...others} />);
}

export default Component;
