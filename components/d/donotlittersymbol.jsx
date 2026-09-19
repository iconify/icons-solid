import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnjzehbdf.css';
import '../../css/a/a23i8nphm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gnjzehbdf"/><path class="a23i8nphm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:donotlittersymbol"} {...others} />);
}

export default Component;
