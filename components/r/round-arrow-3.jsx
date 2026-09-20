import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk8mt4fmg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hk8mt4fmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:round-arrow-3"} {...others} />);
}

export default Component;
