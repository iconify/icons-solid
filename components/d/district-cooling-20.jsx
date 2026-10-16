import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svs32pbol.css';
import '../../css/w/wsv6h_otb.css';
import '../../css/n/neih8ubcu.css';
import '../../css/w/w6fbvubyr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="svs32pbol"/><path class="wsv6h_otb"/><path class="neih8ubcu"/><path class="w6fbvubyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-cooling-20"} {...others} />);
}

export default Component;
