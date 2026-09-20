import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4hj5gzwp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q4hj5gzwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cheese-solid"} {...others} />);
}

export default Component;
