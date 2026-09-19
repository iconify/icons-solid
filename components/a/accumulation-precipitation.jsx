import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq18vxb1u.css';
import '../../css/g/g7j88-bzv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uq18vxb1u"/><path class="g7j88-bzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:accumulation-precipitation"} {...others} />);
}

export default Component;
