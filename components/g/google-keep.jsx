import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ind_uwmve.css';
import '../../css/y/y5z6dwezu.css';
import '../../css/g/g2lri_b3j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ind_uwmve"/><path class="y5z6dwezu"/><path class="g2lri_b3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-keep"} {...others} />);
}

export default Component;
