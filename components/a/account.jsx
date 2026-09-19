import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-f1gczsv.css';
import '../../css/t/toa-48bpx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-f1gczsv"/><path class="toa-48bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:account"} {...others} />);
}

export default Component;
