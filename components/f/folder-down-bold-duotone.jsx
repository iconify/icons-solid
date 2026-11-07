import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2nrf10bf.css';
import '../../css/y/ynl3swb2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2nrf10bf"/><path class="ynl3swb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-down-bold-duotone"} {...others} />);
}

export default Component;
