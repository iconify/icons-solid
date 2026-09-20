import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-2-_i5gv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-2-_i5gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cookie-refresh-outline"} {...others} />);
}

export default Component;
