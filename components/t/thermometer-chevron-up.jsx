import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyxx4tb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyxx4tb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:thermometer-chevron-up"} {...others} />);
}

export default Component;
