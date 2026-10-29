import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7uszhbcj.css';
import '../../css/f/flbsvpbyj.css';
import '../../css/d/dakzdk03i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d7uszhbcj"/><path class="flbsvpbyj wm-a"/><path class="dakzdk03i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-funnel-duo"} {...others} />);
}

export default Component;
