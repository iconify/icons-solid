import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkjb6_06b.css';
import '../../css/y/y--yqbbfh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nkjb6_06b"/><path class="y--yqbbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-loop-left"} {...others} />);
}

export default Component;
