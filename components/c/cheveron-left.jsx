import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2nyl6bcz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f2nyl6bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:cheveron-left"} {...others} />);
}

export default Component;
