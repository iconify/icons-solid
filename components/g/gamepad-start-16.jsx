import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk5yd9wru.css';
import '../../css/y/ygr19icki.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dk5yd9wru"/><path clip-rule="evenodd" class="ygr19icki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-start-16"} {...others} />);
}

export default Component;
