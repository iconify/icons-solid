import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bu8_8lune.css';
import '../../css/y/ygxy_c58d.css';
import '../../css/e/eh32i2zgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bu8_8lune"/><path class="ygxy_c58d"/><path class="eh32i2zgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:subnode-delete"} {...others} />);
}

export default Component;
