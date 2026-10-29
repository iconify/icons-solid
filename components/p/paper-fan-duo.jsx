import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i9cjgyb2j.css';
import '../../css/b/bz31u0r-a.css';
import '../../css/f/fvbk-8bio.css';
import '../../css/o/opucl5yls.css';
import '../../css/i/i770uqt7u.css';
import '../../css/l/lbsx3ub7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i9cjgyb2j"/><path class="bz31u0r-a wm-s"/><path class="fvbk-8bio wm-s"/><path class="opucl5yls"/><path class="i770uqt7u wm-a"/><path class="lbsx3ub7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paper-fan-duo"} {...others} />);
}

export default Component;
