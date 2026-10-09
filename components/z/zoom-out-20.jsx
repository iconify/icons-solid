import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsx9bkbtz.css';
import '../../css/k/kfvih2rid.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jsx9bkbtz"/><path class="kfvih2rid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-out-20"} {...others} />);
}

export default Component;
