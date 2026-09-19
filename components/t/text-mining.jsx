import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5zn4-brr.css';
import '../../css/z/zxlwz1bsp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b5zn4-brr"/><path class="zxlwz1bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-mining"} {...others} />);
}

export default Component;
