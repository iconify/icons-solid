import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re-aofbfv.css';
import '../../css/y/yqhnyw4ee.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f3wy_xbpf.css';
import '../../css/q/q4_1xjnit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re-aofbfv"/><path class="yqhnyw4ee"/><g class="xtpeb-edw"><path class="f3wy_xbpf"/><path class="q4_1xjnit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-open-duotone"} {...others} />);
}

export default Component;
