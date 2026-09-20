import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a04ndx8hk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a04ndx8hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:book-6-ai-line"} {...others} />);
}

export default Component;
