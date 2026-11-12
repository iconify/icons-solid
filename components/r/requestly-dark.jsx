import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_n0_n1bg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_n0_n1bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:requestly-dark"} {...others} />);
}

export default Component;
