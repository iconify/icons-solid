import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_tz7sbvk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o_tz7sbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aiometadata-dark"} {...others} />);
}

export default Component;
