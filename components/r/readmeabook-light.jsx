import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saj1_ob7a.css';
import '../../css/b/bzm068cfm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="saj1_ob7a"/><path class="bzm068cfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readmeabook-light"} {...others} />);
}

export default Component;
