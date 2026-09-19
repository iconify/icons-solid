import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/o/oz4mxp5be.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="oz4mxp5be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:minus"} {...others} />);
}

export default Component;
