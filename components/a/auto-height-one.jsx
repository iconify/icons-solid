import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jr7-gf3vx.css';
import '../../css/m/m05lnlbeu.css';
import '../../css/k/k2glh2bcv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="jr7-gf3vx"/><path class="m05lnlbeu"/><path class="k2glh2bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:auto-height-one"} {...others} />);
}

export default Component;
