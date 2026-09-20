import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s96csflxf.css';
import '../../css/x/xj5_tsbpm.css';
import '../../css/l/ltrau768o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="s96csflxf"/><path class="xj5_tsbpm"/><path class="ltrau768o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:alarm-clock"} {...others} />);
}

export default Component;
