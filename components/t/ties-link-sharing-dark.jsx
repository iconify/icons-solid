import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fztcq4amu.css';
import '../../css/t/tuvrb8wpy.css';
import '../../css/u/uqy6_ibtr.css';
import '../../css/s/sliv2sb3h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fztcq4amu"/><path class="tuvrb8wpy"/><path class="uqy6_ibtr"/><path class="sliv2sb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ties-link-sharing-dark"} {...others} />);
}

export default Component;
