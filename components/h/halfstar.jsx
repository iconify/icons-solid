import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-hlav_un.css';

const viewBox = {"width":1024,"height":961};
const content = `<path class="v-hlav_un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:halfstar"} {...others} />);
}

export default Component;
