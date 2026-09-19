import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ed3f2exdu.css';
import '../../css/y/yd6fzub4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ed3f2exdu"/><path class="yd6fzub4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:message-outline"} {...others} />);
}

export default Component;
