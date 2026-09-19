import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqjus3b5f.css';
import '../../css/c/ch2vo1b_x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uqjus3b5f"/><path class="ch2vo1b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:filter-remove"} {...others} />);
}

export default Component;
