import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr1ljxbfy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sr1ljxbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dice-three-solid"} {...others} />);
}

export default Component;
