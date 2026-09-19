import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqwa95bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rqwa95bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:briefcase-outline"} {...others} />);
}

export default Component;
