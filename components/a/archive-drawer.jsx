import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/du4_nruej.css';
import '../../css/h/hz-4tgb0k.css';
import '../../css/k/km5264l9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="du4_nruej"/><path class="hz-4tgb0k"/><path class="km5264l9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:archive-drawer"} {...others} />);
}

export default Component;
