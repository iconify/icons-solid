import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pcxdo28jt.css';
import '../../css/i/iz8w4e7ux.css';
import '../../css/f/folfl_fvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pcxdo28jt"/><path class="iz8w4e7ux"/><path class="folfl_fvi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snow-globe"} {...others} />);
}

export default Component;
