import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uz11obp7m.css';
import '../../css/m/m_k5mi6ag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uz11obp7m"/><path class="m_k5mi6ag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bus3"} {...others} />);
}

export default Component;
