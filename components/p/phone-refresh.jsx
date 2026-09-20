import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfq1gi_xs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfq1gi_xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:phone-refresh"} {...others} />);
}

export default Component;
