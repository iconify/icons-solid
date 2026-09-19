import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2c5etzdr.css';

const viewBox = {"width":488,"height":496};
const content = `<path class="t2c5etzdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:screen-rotation-lock"} {...others} />);
}

export default Component;
