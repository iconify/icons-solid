import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d3a1uob4c.css';
import '../../css/v/vwuphg_jz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d3a1uob4c"/><path class="vwuphg_jz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:underpants-03"} {...others} />);
}

export default Component;
