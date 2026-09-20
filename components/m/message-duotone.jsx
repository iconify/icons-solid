import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av6p3g-os.css';
import '../../css/h/hdmntob4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="av6p3g-os"/><path class="hdmntob4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-duotone"} {...others} />);
}

export default Component;
