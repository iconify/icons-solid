import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ri0fz1-pk.css';
import '../../css/l/lgy77748a.css';
import '../../css/o/ohav4_1dd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ri0fz1-pk"/><path class="lgy77748a"/><path class="ohav4_1dd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-share-user-human-person-share-signal-transmit-user"} {...others} />);
}

export default Component;
