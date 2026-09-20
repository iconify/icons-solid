import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xkgpt9wlu.css';
import '../../css/y/yxrqwlxud.css';
import '../../css/n/nokwl_mnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path clip-rule="evenodd" class="xkgpt9wlu"/><path clip-rule="evenodd" class="yxrqwlxud"/><path class="nokwl_mnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-microphone-voice-search-logo"} {...others} />);
}

export default Component;
