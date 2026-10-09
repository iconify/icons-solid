import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnezarb7y.css';
import '../../css/u/u-fc2jiif.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nnezarb7y"/><path class="u-fc2jiif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-20"} {...others} />);
}

export default Component;
