import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtgrl4u1h.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="gtgrl4u1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:table-tennis"} {...others} />);
}

export default Component;
