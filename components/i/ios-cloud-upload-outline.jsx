import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psgz5bp_u.css';
import '../../css/z/z3q3owb1o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psgz5bp_u"/><path class="z3q3owb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloud-upload-outline"} {...others} />);
}

export default Component;
