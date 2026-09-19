import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yws3_pbhc.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="yws3_pbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:star-of-life"} {...others} />);
}

export default Component;
