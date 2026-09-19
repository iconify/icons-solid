import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewi525f_x.css';
import '../../css/k/k4vddkb9k.css';
import '../../css/l/lj49ud5bv.css';
import '../../css/o/ob_fvvblc.css';
import '../../css/o/oodpyysvf.css';
import '../../css/z/z7nqsnbny.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ewi525f_x"/><path class="k4vddkb9k"/><path class="lj49ud5bv"/><path class="ob_fvvblc"/><path class="oodpyysvf"/><path class="z7nqsnbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bullseye"} {...others} />);
}

export default Component;
