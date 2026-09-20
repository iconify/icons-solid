import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rh7upse8n.css';
import '../../css/o/o8db31wah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rh7upse8n"/><path class="o8db31wah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:mail-send-envelope"} {...others} />);
}

export default Component;
