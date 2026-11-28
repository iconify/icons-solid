import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ex766_8yd.css';
import '../../css/s/sv-gbdezd.css';
import '../../css/o/otbdjz20a.css';
import '../../css/l/leya0yb-d.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ex766_8yd"/><path class="sv-gbdezd"/><path class="otbdjz20a"/><path class="leya0yb-d"/><path class="eo_76b8fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wifi-off-duo"} {...others} />);
}

export default Component;
