import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdapskboz.css';
import '../../css/c/cggoknbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdapskboz"/><path class="cggoknbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:alarm-snooze"} {...others} />);
}

export default Component;
