import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_2i0ippj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_2i0ippj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:set-top-box"} {...others} />);
}

export default Component;
