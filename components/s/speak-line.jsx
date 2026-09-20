import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjq3w6t5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjq3w6t5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:speak-line"} {...others} />);
}

export default Component;
