import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxdq25e-c.css';
import '../../css/g/gnbaqdmlc.css';
import '../../css/e/ert6iwbnr.css';
import '../../css/f/fgq3oyb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xxdq25e-c"/><path class="gnbaqdmlc"/><path class="ert6iwbnr"/><path class="fgq3oyb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mushroom-1"} {...others} />);
}

export default Component;
