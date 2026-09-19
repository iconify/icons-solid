import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1b_yxnqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1b_yxnqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:beanie-filled"} {...others} />);
}

export default Component;
