import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi7c8xbbv.css';
import '../../css/j/j04y387jd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oi7c8xbbv"/><path class="j04y387jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xbox-game-pass"} {...others} />);
}

export default Component;
