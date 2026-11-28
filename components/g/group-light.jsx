import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1n6r1x6q.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="d1n6r1x6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:group-light"} {...others} />);
}

export default Component;
