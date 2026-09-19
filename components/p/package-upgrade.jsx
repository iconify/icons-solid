import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqie4kb4q.css';
import '../../css/i/ifa7j6beo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqie4kb4q"/><path class="ifa7j6beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:package-upgrade"} {...others} />);
}

export default Component;
