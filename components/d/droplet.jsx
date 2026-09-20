import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e23f5pbvr.css';
import '../../css/a/ajy-hbgee.css';
import '../../css/z/zvjgwzx0c.css';
import '../../css/b/b878dbd_m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e23f5pbvr"/><path class="ajy-hbgee"/><path class="zvjgwzx0c"/><path class="b878dbd_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:droplet"} {...others} />);
}

export default Component;
