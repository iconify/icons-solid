import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjn9d8bpr.css';

const viewBox = {"width":272,"height":512};
const content = `<path class="kjn9d8bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:firebase-bolt"} {...others} />);
}

export default Component;
