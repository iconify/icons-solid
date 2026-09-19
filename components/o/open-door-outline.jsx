import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyvh2j2cm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyvh2j2cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:open-door-outline"} {...others} />);
}

export default Component;
