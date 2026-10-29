import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6fezd8yp.css';
import '../../css/u/ubkmc9bhe.css';
import '../../css/u/ut_982btw.css';
import '../../css/p/p8xiwebjz.css';
import '../../css/u/utb3m3b2d.css';
import '../../css/k/kz8gao10u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a6fezd8yp wm-k"/><path class="ubkmc9bhe wm-k"/><path class="ut_982btw wm-k"/><path class="p8xiwebjz wm-a"/><path class="utb3m3b2d wm-a"/><path class="kz8gao10u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:case-lower"} {...others} />);
}

export default Component;
