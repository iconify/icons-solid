import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/htj3e9bhs.css';
import '../../css/t/txfxjqb6g.css';
import '../../css/i/ixt95bbei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="htj3e9bhs"/><path class="txfxjqb6g"/><path class="ixt95bbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-brain-01"} {...others} />);
}

export default Component;
