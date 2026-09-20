import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxz9-bb7g.css';
import '../../css/v/vyd5slb5p.css';
import '../../css/f/f3mi_ybsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yxz9-bb7g"/><path class="vyd5slb5p"/><path class="f3mi_ybsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-cash"} {...others} />);
}

export default Component;
