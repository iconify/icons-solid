import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh0w-acse.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="hh0w-acse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:chat-processing"} {...others} />);
}

export default Component;
