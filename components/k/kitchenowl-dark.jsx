import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmxn7fbeh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmxn7fbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kitchenowl-dark"} {...others} />);
}

export default Component;
