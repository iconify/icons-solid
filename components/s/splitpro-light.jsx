import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g58_hc9td.css';
import '../../css/w/wh_63k2aq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g58_hc9td"/><path class="wh_63k2aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:splitpro-light"} {...others} />);
}

export default Component;
