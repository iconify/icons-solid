import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4go9bboz.css';
import '../../css/y/y1vck7bwl.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="o4go9bboz"/><path class="y1vck7bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:coin"} {...others} />);
}

export default Component;
