import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgn41v_al.css';
import '../../css/a/a2usqjbsi.css';
import '../../css/s/speqp1bru.css';
import '../../css/r/rrqmlhbam.css';
import '../../css/a/a0wetfzra.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="tgn41v_al"/><rect class="a2usqjbsi"/><path class="speqp1bru"/><rect class="rrqmlhbam"/><rect class="a0wetfzra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:game-three"} {...others} />);
}

export default Component;
