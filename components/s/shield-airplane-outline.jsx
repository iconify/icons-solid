import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvzjp4biu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvzjp4biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shield-airplane-outline"} {...others} />);
}

export default Component;
