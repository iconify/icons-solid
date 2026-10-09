import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofts-6g4o.css';
import '../../css/n/nlascy4eu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ofts-6g4o"/><path class="nlascy4eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terminal-square-20"} {...others} />);
}

export default Component;
