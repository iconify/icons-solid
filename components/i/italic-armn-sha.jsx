import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud7qzlq2q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ud7qzlq2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:italic-armn-sha"} {...others} />);
}

export default Component;
