import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox9ez0b9c.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ox9ez0b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:sun-plant-wilt"} {...others} />);
}

export default Component;
