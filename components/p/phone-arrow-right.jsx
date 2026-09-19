import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz8krcb2j.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="xz8krcb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:phone-arrow-right"} {...others} />);
}

export default Component;
