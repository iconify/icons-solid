import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytgneqs9m.css';
import '../../css/x/xrdyz9_oo.css';
import '../../css/r/r-x9jqika.css';
import '../../css/t/tjs941cnk.css';
import '../../css/z/zv89d8kxa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ytgneqs9m"/><path class="xrdyz9_oo"/><path class="r-x9jqika"/><path class="tjs941cnk"/><path class="zv89d8kxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:capitol"} {...others} />);
}

export default Component;
