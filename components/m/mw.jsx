import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx5qsly0i.css';
import '../../css/p/pakgukclm.css';
import '../../css/w/w81u6k22w.css';
import '../../css/c/c9w00ibyk.css';
import '../../css/z/z2wzabgtk.css';
import '../../css/l/lhywt2b5f.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="rx5qsly0i"/><circle class="pakgukclm"/><path class="w81u6k22w"/><path class="c9w00ibyk"/><path class="z2wzabgtk"/><path class="lhywt2b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mw"} {...others} />);
}

export default Component;
