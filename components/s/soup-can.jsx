import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu2r8si_d.css';
import '../../css/u/unsvoio8e.css';
import '../../css/w/w7y0ng4cv.css';
import '../../css/i/ik07y_b3t.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="yu2r8si_d"/><path class="unsvoio8e"/><path class="w7y0ng4cv"/><path class="ik07y_b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:soup-can"} {...others} />);
}

export default Component;
