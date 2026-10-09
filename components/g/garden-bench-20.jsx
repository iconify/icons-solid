import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfdw6bbqs.css';
import '../../css/k/kpsjv5nug.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nfdw6bbqs"/><path class="kpsjv5nug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garden-bench-20"} {...others} />);
}

export default Component;
