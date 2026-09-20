import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kacyy2b3k.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/c/cn7qxlbmw.css';
import '../../css/y/y0ugp8bhh.css';
import '../../css/k/ka6_r4z_y.css';
import '../../css/i/ilh0h1bvo.css';

const viewBox = {"width":72,"height":72};
const content = `<circle transform="rotate(-45)" class="kacyy2b3k"/><g class="rpvb-o6bq"><circle transform="rotate(-45)" class="cn7qxlbmw"/><path class="y0ugp8bhh"/><path class="ka6_r4z_y"/></g><path class="ilh0h1bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lollipop"} {...others} />);
}

export default Component;
