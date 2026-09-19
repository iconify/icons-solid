import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d777w44ag.css';
import '../../css/c/c9yx--bxi.css';
import '../../css/z/zpen0xb1i.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="d777w44ag"/><circle class="c9yx--bxi"/><path class="zpen0xb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:crown-line"} {...others} />);
}

export default Component;
