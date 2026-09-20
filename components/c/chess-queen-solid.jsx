import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f78rt7b6c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f78rt7b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:chess-queen-solid"} {...others} />);
}

export default Component;
