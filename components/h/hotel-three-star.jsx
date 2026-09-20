import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/aej2_emhx.css';
import '../../css/w/wid9fwbvl.css';
import '../../css/y/yevlstbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="aej2_emhx"/><path class="wid9fwbvl"/><path class="yevlstbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hotel-three-star"} {...others} />);
}

export default Component;
