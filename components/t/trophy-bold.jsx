import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wituw_-ul.css';
import '../../css/u/u378u-36s.css';
import '../../css/q/qjlo9vzdc.css';
import '../../css/y/y0_pg-75f.css';
import '../../css/p/pd5v97bbw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wituw_-ul"/><path class="u378u-36s"/><path clip-rule="evenodd" class="qjlo9vzdc"/><path class="y0_pg-75f"/><path class="pd5v97bbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trophy-bold"} {...others} />);
}

export default Component;
