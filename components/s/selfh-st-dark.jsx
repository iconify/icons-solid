import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnxl3-vmf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tnxl3-vmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:selfh-st-dark"} {...others} />);
}

export default Component;
