import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3iboo12o.css';
import '../../css/n/n0ta28bqr.css';
import '../../css/k/k45m38b3b.css';
import '../../css/z/za00otbmy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j3iboo12o"/><path class="n0ta28bqr"/><path class="k45m38b3b"/><path class="za00otbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:react"} {...others} />);
}

export default Component;
