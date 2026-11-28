import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7vn3acim.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/voyx-49xj.css';
import '../../css/v/vsmubdx_a.css';
import '../../css/p/pmtkcackh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary x7vn3acim"/><g class="dt0cm9dhy primary"><path class="voyx-49xj"/><path class="vsmubdx_a"/><path class="pmtkcackh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-knight-duo"} {...others} />);
}

export default Component;
