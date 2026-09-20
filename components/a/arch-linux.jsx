import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc_mv5j_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tc_mv5j_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:arch-linux"} {...others} />);
}

export default Component;
