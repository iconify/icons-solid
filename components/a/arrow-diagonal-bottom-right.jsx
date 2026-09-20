import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obf1m3bin.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="obf1m3bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:arrow-diagonal-bottom-right"} {...others} />);
}

export default Component;
