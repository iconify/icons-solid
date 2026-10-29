import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wu4ujjs1l.css';
import '../../css/f/f9i3isblv.css';
import '../../css/h/hvwm98ued.css';
import '../../css/z/zugs6ubka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wu4ujjs1l"/><path class="f9i3isblv wm-a"/><path class="hvwm98ued wm-k"/><path class="wm-a zugs6ubka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-frog-sketch"} {...others} />);
}

export default Component;
