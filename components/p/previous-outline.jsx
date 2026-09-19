import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kof2-hblc.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kof2-hblc"/><path class="svdy80z7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:previous-outline"} {...others} />);
}

export default Component;
