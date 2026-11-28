import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w-aiud5ru.css';
import '../../css/z/zhm-dib2f.css';
import '../../css/l/l9fprqb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w-aiud5ru"/><path class="zhm-dib2f"/><path class="l9fprqb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:upload"} {...others} />);
}

export default Component;
