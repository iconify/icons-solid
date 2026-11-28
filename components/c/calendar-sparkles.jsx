import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f32u92wnr.css';
import '../../css/r/rpixg5b7g.css';
import '../../css/r/rp-107qrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f32u92wnr"/><path class="rpixg5b7g"/><path class="rp-107qrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calendar-sparkles"} {...others} />);
}

export default Component;
