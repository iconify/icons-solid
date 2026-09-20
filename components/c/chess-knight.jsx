import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iczayc48j.css';
import '../../css/k/kdu5y_0mf.css';
import '../../css/z/zswhjfb0c.css';
import '../../css/x/xxw0csb7z.css';
import '../../css/r/r1nazb77g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iczayc48j"/><path class="kdu5y_0mf"/><path class="zswhjfb0c"/><path class="xxw0csb7z"/><path class="r1nazb77g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:chess-knight"} {...others} />);
}

export default Component;
