import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lal7_isyr.css';
import '../../css/m/mjkr6tb4a.css';
import '../../css/w/wcny-ibdw.css';
import '../../css/x/x9024bb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lal7_isyr"/><path class="mjkr6tb4a"/><path class="wcny-ibdw"/><path clip-rule="evenodd" class="x9024bb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-code-outline"} {...others} />);
}

export default Component;
