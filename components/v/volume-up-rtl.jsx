import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8f6_-atn.css';
import '../../css/b/b_7qycc3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f8f6_-atn"/><path class="b_7qycc3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:volume-up-rtl"} {...others} />);
}

export default Component;
