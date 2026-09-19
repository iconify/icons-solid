import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pos2pcbxf.css';
import '../../css/s/syd5dvn_a.css';
import '../../css/o/o6ib3twus.css';
import '../../css/e/ezlh-7cze.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pos2pcbxf"/><path class="syd5dvn_a"/><path class="o6ib3twus"/><path class="ezlh-7cze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:shootingstar"} {...others} />);
}

export default Component;
