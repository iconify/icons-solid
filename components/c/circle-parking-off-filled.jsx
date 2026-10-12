import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qevsu6brs.css';
import '../../css/w/wfk--dl3u.css';
import '../../css/v/vgshsqbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qevsu6brs"/><path class="wfk--dl3u"/><path class="vgshsqbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-parking-off-filled"} {...others} />);
}

export default Component;
