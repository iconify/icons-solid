import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmuf8cooy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wmuf8cooy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:prettier"} {...others} />);
}

export default Component;
