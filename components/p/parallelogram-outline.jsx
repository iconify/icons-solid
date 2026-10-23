import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijh0vbcxl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ijh0vbcxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:parallelogram-outline"} {...others} />);
}

export default Component;
