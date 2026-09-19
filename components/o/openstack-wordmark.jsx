import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq4jivysn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="eq4jivysn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:openstack-wordmark"} {...others} />);
}

export default Component;
