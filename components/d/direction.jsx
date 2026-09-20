import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/m/m66rpgbeg.css';
import '../../css/a/a9ant_31z.css';
import '../../css/r/rz_97db5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="m66rpgbeg"/><path class="a9ant_31z"/><path class="rz_97db5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction"} {...others} />);
}

export default Component;
