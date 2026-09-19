import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfk4z3biw.css';
import '../../css/y/ygf9v4-fy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfk4z3biw"/><path class="ygf9v4-fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bookmark-star"} {...others} />);
}

export default Component;
