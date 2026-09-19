import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqvb99byo.css';
import '../../css/c/c73e0yd1g.css';
import '../../css/r/rp2ocszvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hqvb99byo"/><path class="c73e0yd1g"/><path class="rp2ocszvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:id-card-lanyard"} {...others} />);
}

export default Component;
