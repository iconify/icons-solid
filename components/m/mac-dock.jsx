import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4bv7nc2y.css';
import '../../css/e/e4_hhhitt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p4bv7nc2y"/><path class="e4_hhhitt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mac-dock"} {...others} />);
}

export default Component;
