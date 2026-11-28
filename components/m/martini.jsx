import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ia0ainb7h.css';
import '../../css/p/pu4i0cblx.css';
import '../../css/j/jsa_ui-gx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ia0ainb7h"/><path class="pu4i0cblx"/><path class="jsa_ui-gx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:martini"} {...others} />);
}

export default Component;
