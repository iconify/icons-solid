import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/erzry2aio.css';
import '../../css/v/v1u77umhh.css';
import '../../css/c/ckjve95gp.css';
import '../../css/k/kf3zx-18r.css';
import '../../css/r/roipsh44n.css';
import '../../css/f/folfl_fvi.css';
import '../../css/p/pcxdo28jt.css';
import '../../css/i/iz8w4e7ux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="erzry2aio"/><path class="v1u77umhh"/><path class="ckjve95gp"/><path class="kf3zx-18r wm-a"/><path class="roipsh44n"/><path class="folfl_fvi wm-a"/><path class="pcxdo28jt"/><path class="iz8w4e7ux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snow-globe-duo"} {...others} />);
}

export default Component;
