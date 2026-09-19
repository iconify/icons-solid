import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwany8eak.css';
import '../../css/l/laefk-_jt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zwany8eak"/><path class="laefk-_jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysdownpointingindex"} {...others} />);
}

export default Component;
