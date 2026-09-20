import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-o90gl-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-o90gl-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:moon-waning-gibbous"} {...others} />);
}

export default Component;
