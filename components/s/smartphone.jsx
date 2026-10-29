import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7yuqu_hl.css';
import '../../css/g/g3nbfd4rn.css';
import '../../css/m/maarl1b0o.css';
import '../../css/b/bqsfhmb7r.css';
import '../../css/r/rwp0e5bwq.css';
import '../../css/r/r30gs93fx.css';
import '../../css/k/k2eoilovs.css';
import '../../css/l/lccz_bb4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j7yuqu_hl wm-k"/><path class="g3nbfd4rn wm-k"/><path class="maarl1b0o wm-k"/><path class="bqsfhmb7r wm-shine"/><path class="rwp0e5bwq wm-k"/><path class="r30gs93fx wm-shine"/><path class="k2eoilovs wm-a"/><path class="lccz_bb4c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:smartphone"} {...others} />);
}

export default Component;
