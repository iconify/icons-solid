import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlwegtczi.css';
import '../../css/t/t4u_3fbho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rlwegtczi"/><path class="t4u_3fbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-volume-low"} {...others} />);
}

export default Component;
