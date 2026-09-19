import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6a31sbyd.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="t6a31sbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:volume-off"} {...others} />);
}

export default Component;
