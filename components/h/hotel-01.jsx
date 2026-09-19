import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6851kb2f.css';
import '../../css/j/jayy_jupc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6851kb2f"/><path class="jayy_jupc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hotel-01"} {...others} />);
}

export default Component;
