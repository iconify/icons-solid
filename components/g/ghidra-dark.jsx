import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8lutftsu.css';
import '../../css/o/oz-ecrdze.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x8lutftsu"/><path class="oz-ecrdze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ghidra-dark"} {...others} />);
}

export default Component;
