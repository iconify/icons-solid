import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwn5_d3cv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pwn5_d3cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:a-arrow-up"} {...others} />);
}

export default Component;
