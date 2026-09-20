import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1b04pzpm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q1b04pzpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:barcode-buddy-light"} {...others} />);
}

export default Component;
