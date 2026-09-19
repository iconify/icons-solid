import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgjgk_8pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgjgk_8pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:forward-step-outline"} {...others} />);
}

export default Component;
