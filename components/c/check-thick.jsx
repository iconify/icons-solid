import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysamgs33o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ysamgs33o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:check-thick"} {...others} />);
}

export default Component;
