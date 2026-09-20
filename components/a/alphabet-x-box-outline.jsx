import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsd5u-_9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsd5u-_9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alphabet-x-box-outline"} {...others} />);
}

export default Component;
