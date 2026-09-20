import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvmyrwbcs.css';
import '../../css/p/pvt38-bcd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dvmyrwbcs"/><path class="pvt38-bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vue-js"} {...others} />);
}

export default Component;
