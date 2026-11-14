import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qloeeh4pd.css';
import '../../css/t/tw_5ixbdl.css';
import '../../css/c/c6dpzhafn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="qloeeh4pd"><path class="tw_5ixbdl"/><path class="c6dpzhafn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-secure"} {...others} />);
}

export default Component;
