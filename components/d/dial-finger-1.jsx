import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jsbks5b4c.css';
import '../../css/a/ay-txgbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jsbks5b4c"/><path class="ay-txgbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:dial-finger-1"} {...others} />);
}

export default Component;
