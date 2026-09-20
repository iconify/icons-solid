import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7okh1bgg.css';
import '../../css/g/gakqf2bdp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p7okh1bgg"/><path class="gakqf2bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:subatic"} {...others} />);
}

export default Component;
