import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/styyr0ojb.css';
import '../../css/x/xbnh1mz5u.css';
import '../../css/v/vkj5f5qja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="styyr0ojb"/><path class="xbnh1mz5u"/><path class="vkj5f5qja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-voice-01"} {...others} />);
}

export default Component;
