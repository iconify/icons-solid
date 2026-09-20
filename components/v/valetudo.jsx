import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-eaap4bd.css';
import '../../css/f/f86310bce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-eaap4bd"/><path class="f86310bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:valetudo"} {...others} />);
}

export default Component;
