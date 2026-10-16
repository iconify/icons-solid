import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfzjs4b6t.css';
import '../../css/y/y4dvfdc8f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nfzjs4b6t"/><path class="y4dvfdc8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-detector-20-bold"} {...others} />);
}

export default Component;
