import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2a_cniwp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l2a_cniwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-tables-light"} {...others} />);
}

export default Component;
