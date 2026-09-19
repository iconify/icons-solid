import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejwi4yg8o.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ejwi4yg8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:plane-circle-xmark"} {...others} />);
}

export default Component;
