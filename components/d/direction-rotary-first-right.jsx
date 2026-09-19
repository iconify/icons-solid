import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqc1pecct.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aqc1pecct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-rotary-first-right"} {...others} />);
}

export default Component;
