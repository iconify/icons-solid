import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e76parb_w.css';
import '../../css/q/qqt6mfb8z.css';
import '../../css/d/dypwk2lxc.css';
import '../../css/r/rkf5-q5qb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e76parb_w"/><path class="qqt6mfb8z"/><path class="dypwk2lxc"/><path class="rkf5-q5qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:letterboxd"} {...others} />);
}

export default Component;
