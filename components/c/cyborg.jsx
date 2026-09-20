import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc4de9b6x.css';
import '../../css/x/xdcu1e3tm.css';
import '../../css/p/pro7mk2do.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hc4de9b6x"/><path class="xdcu1e3tm"/><path class="pro7mk2do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cyborg"} {...others} />);
}

export default Component;
