import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0hucxhbr.css';
import '../../css/q/q4cmd7h4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0hucxhbr"/><path class="q4cmd7h4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dropdown-line"} {...others} />);
}

export default Component;
