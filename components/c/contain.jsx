import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/motq1qyby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="motq1qyby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:contain"} {...others} />);
}

export default Component;
