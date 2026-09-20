import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfeo93_vz.css';
import '../../css/g/gpqcxdbjh.css';
import '../../css/s/s19iiybot.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yfeo93_vz"/><path class="gpqcxdbjh"/><path class="s19iiybot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:volume-level-high"} {...others} />);
}

export default Component;
