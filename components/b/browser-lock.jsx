import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hrfl-ybnc.css';
import '../../css/n/nim0qybvr.css';
import '../../css/o/oa8_36spi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="to-5kdesz"><path class="hrfl-ybnc"/><path class="nim0qybvr"/><path class="oa8_36spi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:browser-lock"} {...others} />);
}

export default Component;
