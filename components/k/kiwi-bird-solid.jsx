import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk1f7ihtx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sk1f7ihtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:kiwi-bird-solid"} {...others} />);
}

export default Component;
