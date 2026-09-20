import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp8tl5bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zp8tl5bnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:left-small-line"} {...others} />);
}

export default Component;
