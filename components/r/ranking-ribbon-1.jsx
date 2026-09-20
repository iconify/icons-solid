import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p_oj-1bqn.css';
import '../../css/a/areanobkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p_oj-1bqn"/><path class="areanobkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ranking-ribbon-1"} {...others} />);
}

export default Component;
