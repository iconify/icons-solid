import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njeis7bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njeis7bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:office-building-plus-outline"} {...others} />);
}

export default Component;
