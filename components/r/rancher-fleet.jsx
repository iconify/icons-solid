import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twfeyencb.css';
import '../../css/h/hnsdbi_4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="twfeyencb"/><path class="hnsdbi_4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-fleet"} {...others} />);
}

export default Component;
