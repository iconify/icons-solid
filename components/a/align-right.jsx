import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q5kmf509r.css';
import '../../css/f/fo43xbclk.css';
import '../../css/b/bh-w7xjmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q5kmf509r"/><rect transform="rotate(-90 7.75 19.75)" class="fo43xbclk"/><rect transform="rotate(-90 2.75 10.25)" class="bh-w7xjmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:align-right"} {...others} />);
}

export default Component;
