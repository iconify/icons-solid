import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc1h2ybiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc1h2ybiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:inbox-arrow-up-outline"} {...others} />);
}

export default Component;
