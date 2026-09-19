import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv9h8h9hv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rv9h8h9hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:fingerprint"} {...others} />);
}

export default Component;
