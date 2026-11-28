import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jy7vym_xc.css';
import '../../css/h/h47yj84tl.css';
import '../../css/w/w4hi3nbug.css';
import '../../css/h/ht6zq-bbo.css';
import '../../css/r/r4bj6wbve.css';
import '../../css/q/qc2qsy1jj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jy7vym_xc"/><path class="h47yj84tl"/><path class="w4hi3nbug"/><path class="ht6zq-bbo"/><path class="r4bj6wbve"/><path class="qc2qsy1jj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:parachute"} {...others} />);
}

export default Component;
