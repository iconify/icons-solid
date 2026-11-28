import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sdvrmkb1y.css';
import '../../css/t/tzst57atz.css';
import '../../css/k/k4pti5n_u.css';
import '../../css/z/zxw4384ui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sdvrmkb1y"/><path class="tzst57atz"/><path class="k4pti5n_u"/><path class="zxw4384ui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:salad"} {...others} />);
}

export default Component;
