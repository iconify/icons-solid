import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skrsffb9p.css';
import '../../css/q/qll572bfj.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="skrsffb9p"/><path clip-rule="evenodd" class="qll572bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:warning-12"} {...others} />);
}

export default Component;
