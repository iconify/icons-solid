import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c003x8brs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c003x8brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cursor-arrow-rays-20-solid"} {...others} />);
}

export default Component;
