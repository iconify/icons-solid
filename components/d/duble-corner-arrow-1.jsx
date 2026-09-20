import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea-ko3b1b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ea-ko3b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:duble-corner-arrow-1"} {...others} />);
}

export default Component;
