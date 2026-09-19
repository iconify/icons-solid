import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8ry8ubus.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="v8ry8ubus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-down-left-circle-fill"} {...others} />);
}

export default Component;
