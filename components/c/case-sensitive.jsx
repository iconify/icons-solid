import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x_m31ivmz.css';
import '../../css/f/fbuw7xbwj.css';
import '../../css/l/lbpq4tbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x_m31ivmz"/><path class="fbuw7xbwj"/><path class="lbpq4tbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:case-sensitive"} {...others} />);
}

export default Component;
