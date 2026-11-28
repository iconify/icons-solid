import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f6c2tj9bn.css';
import '../../css/r/r1j2eicsi.css';
import '../../css/c/cfk_ovbga.css';
import '../../css/o/og8zkpbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f6c2tj9bn"/><path class="r1j2eicsi"/><path class="cfk_ovbga"/><path class="og8zkpbwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:window-horizontal-open"} {...others} />);
}

export default Component;
