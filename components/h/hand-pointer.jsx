import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kddf7p6ny.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kddf7p6ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:hand-pointer"} {...others} />);
}

export default Component;
