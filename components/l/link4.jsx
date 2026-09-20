import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j7h6hou_i.css';
import '../../css/m/m_mb5mu8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j7h6hou_i"/><path class="m_mb5mu8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link4"} {...others} />);
}

export default Component;
