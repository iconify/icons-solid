import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vclaqt84l.css';
import '../../css/c/cx9tddlgw.css';
import '../../css/m/mika2zbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vclaqt84l wm-s"/><path class="cx9tddlgw"/><path class="mika2zbzn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spell-check-duo"} {...others} />);
}

export default Component;
