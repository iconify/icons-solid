import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3imq2azo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j3imq2azo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:paint-brush-20-solid"} {...others} />);
}

export default Component;
