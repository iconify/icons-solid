import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afv-v0b1s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="afv-v0b1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-dual-y-axis"} {...others} />);
}

export default Component;
