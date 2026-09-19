import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iet_bbczh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iet_bbczh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:plane-pilot"} {...others} />);
}

export default Component;
