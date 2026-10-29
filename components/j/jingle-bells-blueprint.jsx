import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bfgi9essg.css';
import '../../css/o/oykydqjmq.css';
import '../../css/e/eso6vwbue.css';
import '../../css/l/ll7svlg2u.css';
import '../../css/d/d-isrd9sw.css';
import '../../css/c/ccdty3b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bfgi9essg wm-deco"/><path class="oykydqjmq wm-deco"/><path class="eso6vwbue wm-deco"/><path class="ll7svlg2u wm-k"/><path class="d-isrd9sw wm-a"/><path class="ccdty3b5o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jingle-bells-blueprint"} {...others} />);
}

export default Component;
