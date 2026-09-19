import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im61p5bjl.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="im61p5bjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-split-3x1"} {...others} />);
}

export default Component;
