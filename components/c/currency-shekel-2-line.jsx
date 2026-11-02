import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bss2tqi7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bss2tqi7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-shekel-2-line"} {...others} />);
}

export default Component;
