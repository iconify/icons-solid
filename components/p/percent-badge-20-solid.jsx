import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd-f8lbjr.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="qd-f8lbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:percent-badge-20-solid"} {...others} />);
}

export default Component;
