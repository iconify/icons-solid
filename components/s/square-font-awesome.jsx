import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3jh0x0el.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="t3jh0x0el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:square-font-awesome"} {...others} />);
}

export default Component;
