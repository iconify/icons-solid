import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuoz_bcaq.css';
import '../../css/g/gavnn00vr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cuoz_bcaq"/><path class="gavnn00vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delivery-robot-20"} {...others} />);
}

export default Component;
