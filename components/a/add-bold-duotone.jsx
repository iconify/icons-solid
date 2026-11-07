import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaoyf82ot.css';
import '../../css/v/vmj_u5b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yaoyf82ot"/><path class="vmj_u5b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:add-bold-duotone"} {...others} />);
}

export default Component;
