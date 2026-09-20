import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxvmi4bed.css';
import '../../css/v/v6hcovu1y.css';
import '../../css/s/s_4ewebyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxvmi4bed"/><circle class="v6hcovu1y"/><circle class="s_4ewebyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:selfh-st"} {...others} />);
}

export default Component;
