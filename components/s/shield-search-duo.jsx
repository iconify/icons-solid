import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkb5n6jyi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/w/wgr0qgbwv.css';
import '../../css/l/lm4pd1bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wkb5n6jyi"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="wgr0qgbwv"/><path class="lm4pd1bxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-search-duo"} {...others} />);
}

export default Component;
