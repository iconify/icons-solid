import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmdssxr9w.css';
import '../../css/d/d709sgber.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmdssxr9w"/><path class="d709sgber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-beaker"} {...others} />);
}

export default Component;
