import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0ucqz9kr.css';
import '../../css/e/emdpkhv1c.css';
import '../../css/r/rqhxtipmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m0ucqz9kr"/><path class="emdpkhv1c"/><path class="rqhxtipmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:input-sparkles"} {...others} />);
}

export default Component;
