import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5rb22bzv.css';
import '../../css/a/ad4ln5bah.css';
import '../../css/y/y0wutcc8a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p5rb22bzv"/><path class="ad4ln5bah"/><path class="y0wutcc8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dawarich-dark"} {...others} />);
}

export default Component;
