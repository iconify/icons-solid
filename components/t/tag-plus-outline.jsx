import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijh1c3bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ijh1c3bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tag-plus-outline"} {...others} />);
}

export default Component;
