import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf8jbf8en.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kf8jbf8en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:calendar-export-outline"} {...others} />);
}

export default Component;
