import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0_xffd0s.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="q0_xffd0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:earth-network-o"} {...others} />);
}

export default Component;
