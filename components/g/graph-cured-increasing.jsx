import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jt23tkppp.css';
import '../../css/v/vjuq9pdef.css';
import '../../css/u/ue-__l4fk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jt23tkppp"/><path class="vjuq9pdef"/><path class="ue-__l4fk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-cured-increasing"} {...others} />);
}

export default Component;
