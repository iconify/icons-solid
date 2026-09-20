import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1e1eib7x.css';
import '../../css/f/f1pn7ybqo.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="o1e1eib7x"/><path class="f1pn7ybqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:arrow-right"} {...others} />);
}

export default Component;
