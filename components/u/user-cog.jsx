import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7-m3femq.css';
import '../../css/k/knin50p_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y7-m3femq"/><circle class="knin50p_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-cog"} {...others} />);
}

export default Component;
