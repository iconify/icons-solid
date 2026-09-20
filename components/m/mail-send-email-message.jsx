import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/rt2607b9w.css';
import '../../css/w/wytv0dboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="rt2607b9w"/><path class="wytv0dboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:mail-send-email-message"} {...others} />);
}

export default Component;
