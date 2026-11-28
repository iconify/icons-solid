import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z7ef3oylu.css';
import '../../css/p/p_0wpug2z.css';
import '../../css/l/l9fprqb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z7ef3oylu"/><path class="p_0wpug2z"/><path class="l9fprqb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:download"} {...others} />);
}

export default Component;
