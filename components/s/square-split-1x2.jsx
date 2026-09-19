import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st0_9e3qq.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="st0_9e3qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:square-split-1x2"} {...others} />);
}

export default Component;
