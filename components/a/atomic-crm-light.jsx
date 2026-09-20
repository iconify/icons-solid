import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa_y8xbat.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xa_y8xbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:atomic-crm-light"} {...others} />);
}

export default Component;
