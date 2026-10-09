import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9t99pbvc.css';
import '../../css/f/flil27bwc.css';
import '../../css/t/tb6-f1eyw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l9t99pbvc"/><path class="flil27bwc"/><path class="tb6-f1eyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-hut-20-bold"} {...others} />);
}

export default Component;
