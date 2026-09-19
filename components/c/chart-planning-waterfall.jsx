import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3hzlzbfx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t3hzlzbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-planning-waterfall"} {...others} />);
}

export default Component;
