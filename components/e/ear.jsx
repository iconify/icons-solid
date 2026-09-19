import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q71dgkbeb.css';
import '../../css/y/yu6xp2bdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q71dgkbeb"/><path class="yu6xp2bdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ear"} {...others} />);
}

export default Component;
