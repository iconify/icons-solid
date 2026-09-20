import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgb3sjbex.css';
import '../../css/a/ai_50vbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lgb3sjbex"/><path class="ai_50vbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:microchip-board"} {...others} />);
}

export default Component;
