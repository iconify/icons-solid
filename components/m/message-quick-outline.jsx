import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szvk_z3ya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szvk_z3ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:message-quick-outline"} {...others} />);
}

export default Component;
