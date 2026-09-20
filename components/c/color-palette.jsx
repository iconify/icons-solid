import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrqeybr-c.css';
import '../../css/o/o1embaboi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qrqeybr-c"/><path class="o1embaboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:color-palette"} {...others} />);
}

export default Component;
