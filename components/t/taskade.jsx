import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz934u5vg.css';
import '../../css/n/ny4gz8bqt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pz934u5vg"/><path class="ny4gz8bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:taskade"} {...others} />);
}

export default Component;
