import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wo0r7lm9u.css';
import '../../css/g/gy9n3pbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="wo0r7lm9u"/><path class="gy9n3pbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:settings-dot-sharp-duotone"} {...others} />);
}

export default Component;
