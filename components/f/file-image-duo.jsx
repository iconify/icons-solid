import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tabbn5s2h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/r/rmrc9hbtg.css';
import '../../css/p/p-8a-mlqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tabbn5s2h"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="rmrc9hbtg"/><path class="p-8a-mlqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-image-duo"} {...others} />);
}

export default Component;
