import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omu70acdu.css';
import '../../css/x/x_6zwgo6p.css';
import '../../css/v/v23eax-8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="omu70acdu"/><path class="x_6zwgo6p"/><path class="v23eax-8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ladybeetle"} {...others} />);
}

export default Component;
