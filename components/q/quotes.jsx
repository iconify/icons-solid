import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg1wa1tlz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rg1wa1tlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:quotes"} {...others} />);
}

export default Component;
