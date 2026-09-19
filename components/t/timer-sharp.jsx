import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygy8b74rs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ygy8b74rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:timer-sharp"} {...others} />);
}

export default Component;
