import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/pcpxevbnv.css';
import '../../css/l/l-edodtcw.css';
import '../../css/s/stgxqybjo.css';
import '../../css/n/ni5imk9ay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="pcpxevbnv"/><path class="l-edodtcw"/><path class="stgxqybjo"/><path class="ni5imk9ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:cell"} {...others} />);
}

export default Component;
