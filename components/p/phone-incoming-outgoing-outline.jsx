import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld_s7kl1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ld_s7kl1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:phone-incoming-outgoing-outline"} {...others} />);
}

export default Component;
