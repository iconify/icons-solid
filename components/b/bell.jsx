import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcf0a2x-v.css';
import '../../css/y/yr6qxeb0g.css';
import '../../css/l/lrjsqqbbm.css';
import '../../css/c/cd3dpacbb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fcf0a2x-v"/><path class="yr6qxeb0g"/><path class="lrjsqqbbm"/><path class="cd3dpacbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bell"} {...others} />);
}

export default Component;
