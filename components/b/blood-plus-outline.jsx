import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omu4_-bey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omu4_-bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:blood-plus-outline"} {...others} />);
}

export default Component;
