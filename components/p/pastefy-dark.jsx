import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx914upgl.css';
import '../../css/r/rc6--6b0h.css';
import '../../css/w/wmnw5bvdw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dx914upgl"/><path class="rc6--6b0h"/><path class="wmnw5bvdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pastefy-dark"} {...others} />);
}

export default Component;
