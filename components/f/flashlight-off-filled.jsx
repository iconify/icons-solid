import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gotpsbcpu.css';
import '../../css/w/wxtz8objy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gotpsbcpu"/><path class="wxtz8objy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flashlight-off-filled"} {...others} />);
}

export default Component;
