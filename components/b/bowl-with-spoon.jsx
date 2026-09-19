import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5aaj_bbr.css';
import '../../css/e/ed9dikbbk.css';
import '../../css/j/jtlbhuzev.css';
import '../../css/c/c5qfd0bsf.css';
import '../../css/u/usodosvpt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="r5aaj_bbr"/><path class="ed9dikbbk"/><path class="jtlbhuzev"/><path class="c5qfd0bsf"/><path class="usodosvpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bowl-with-spoon"} {...others} />);
}

export default Component;
