import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/znqi52bou.css';
import '../../css/j/ju6djclts.css';
import '../../css/r/rsp6aac3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="znqi52bou"/><path class="ju6djclts"/><path class="rsp6aac3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:property-view"} {...others} />);
}

export default Component;
