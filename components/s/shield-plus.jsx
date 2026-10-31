import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/i/ilwsnr6hs.css';
import '../../css/f/fz66djbqw.css';
import '../../css/m/m682pvtzs.css';
import '../../css/v/v99dv7jfe.css';
import '../../css/k/kgep8hbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="ilwsnr6hs"/><path class="fz66djbqw"/><path class="m682pvtzs"/><path class="v99dv7jfe"/><path class="kgep8hbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield-plus"} {...others} />);
}

export default Component;
