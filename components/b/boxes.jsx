import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y6iojqb3m.css';
import '../../css/r/r81zoppqz.css';
import '../../css/w/w2-237bxg.css';
import '../../css/p/pdzxnyjvp.css';
import '../../css/c/c2th96roa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y6iojqb3m"/><path class="r81zoppqz"/><path class="w2-237bxg wm-a"/><path class="pdzxnyjvp"/><path class="c2th96roa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:boxes"} {...others} />);
}

export default Component;
