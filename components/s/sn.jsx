import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwu9b_0ii.css';
import '../../css/b/brwhfzbzk.css';
import '../../css/n/nqmsydbey.css';
import '../../css/r/r3aa4jbvc.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="dwu9b_0ii"/><path class="brwhfzbzk"/><path class="nqmsydbey"/><path class="r3aa4jbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sn"} {...others} />);
}

export default Component;
