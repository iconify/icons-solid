import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gswtq35or.css';
import '../../css/r/r10rxstew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gswtq35or"/><path class="r10rxstew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-add-angle-bold-duotone"} {...others} />);
}

export default Component;
