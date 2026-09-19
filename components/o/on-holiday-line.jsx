import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcw9l3bkd.css';
import '../../css/c/cmarxq79e.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="jcw9l3bkd"/><path class="cmarxq79e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:on-holiday-line"} {...others} />);
}

export default Component;
