import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zksiksp6c.css';
import '../../css/a/agirlsb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zksiksp6c"/><path class="agirlsb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mosque-05"} {...others} />);
}

export default Component;
