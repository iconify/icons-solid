import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm59u6zwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm59u6zwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:zip-box-outline"} {...others} />);
}

export default Component;
