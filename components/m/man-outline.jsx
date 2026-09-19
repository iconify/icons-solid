import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftykwmc2g.css';
import '../../css/v/vzzdp4b2g.css';
import '../../css/b/bnuokeb_v.css';
import '../../css/o/o0lqhvmmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ftykwmc2g"/><path class="vzzdp4b2g"/><path class="bnuokeb_v"/><circle class="o0lqhvmmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:man-outline"} {...others} />);
}

export default Component;
