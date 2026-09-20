import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9bm9xb9b.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="a9bm9xb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:calendar-week"} {...others} />);
}

export default Component;
