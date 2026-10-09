import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shss9gboo.css';
import '../../css/w/wik2ozbii.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="shss9gboo"/><path class="wik2ozbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-down-20"} {...others} />);
}

export default Component;
