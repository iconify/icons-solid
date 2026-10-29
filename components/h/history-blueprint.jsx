import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eyy353b_i.css';
import '../../css/t/th2f48bek.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/m/mu570abql.css';
import '../../css/u/uj04abetb.css';
import '../../css/c/c71ugsbxh.css';
import '../../css/e/eqlqx4b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eyy353b_i wm-deco"/><path class="th2f48bek wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="mu570abql wm-k"/><path class="uj04abetb wm-a"/><path class="c71ugsbxh wm-k"/><path class="eqlqx4b4o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:history-blueprint"} {...others} />);
}

export default Component;
