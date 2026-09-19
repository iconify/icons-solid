import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewcxawbkj.css';
import '../../css/p/pfm1z1-ik.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ewcxawbkj"/><path class="pfm1z1-ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:result"} {...others} />);
}

export default Component;
