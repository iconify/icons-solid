import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdnhdf9mj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zdnhdf9mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:triangle-down-outline"} {...others} />);
}

export default Component;
