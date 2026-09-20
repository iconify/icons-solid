import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yym25ybbb.css';
import '../../css/i/iz5g4s_5f.css';
import '../../css/o/o2lgrpb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yym25ybbb"/><path class="iz5g4s_5f"/><path class="o2lgrpb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:strategy-tasks"} {...others} />);
}

export default Component;
