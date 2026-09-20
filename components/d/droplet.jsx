import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0day-b1r.css';
import '../../css/r/rzjiq6ajn.css';
import '../../css/j/jce5cjb-r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="j0day-b1r"/><path class="rzjiq6ajn"/><path class="jce5cjb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:droplet"} {...others} />);
}

export default Component;
