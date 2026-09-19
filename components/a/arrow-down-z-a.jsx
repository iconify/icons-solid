import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de6mm3bss.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="de6mm3bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:arrow-down-z-a"} {...others} />);
}

export default Component;
