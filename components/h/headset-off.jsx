import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/va8ftmb0w.css';
import '../../css/u/u14y1-a6f.css';
import '../../css/g/gr9fkobwk.css';
import '../../css/r/r9dyn-bys.css';
import '../../css/q/qgacn-68g.css';
import '../../css/g/gfgwaib4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="va8ftmb0w"/><path class="u14y1-a6f"/><path class="gr9fkobwk"/><path class="r9dyn-bys"/><path class="qgacn-68g"/><path class="gfgwaib4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headset-off"} {...others} />);
}

export default Component;
