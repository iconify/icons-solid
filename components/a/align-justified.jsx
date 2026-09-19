import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2l0cwc7e.css';

const viewBox = {"width":384,"height":448};
const content = `<path class="p2l0cwc7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:align-justified"} {...others} />);
}

export default Component;
