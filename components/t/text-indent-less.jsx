import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8b5cke4w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t8b5cke4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-indent-less"} {...others} />);
}

export default Component;
