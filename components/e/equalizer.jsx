import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/one0pebsa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="one0pebsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:equalizer"} {...others} />);
}

export default Component;
