import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3wuugj7j.css';
import '../../css/t/t42cetwhi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j3wuugj7j"/><path class="t42cetwhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:water-device"} {...others} />);
}

export default Component;
