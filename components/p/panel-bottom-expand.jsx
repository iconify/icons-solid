import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/z/ze9vub3ex.css';
import '../../css/l/l44r8cu4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oqqr_m9av"/><path class="ze9vub3ex"/><path class="l44r8cu4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:panel-bottom-expand"} {...others} />);
}

export default Component;
