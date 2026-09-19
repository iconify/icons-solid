import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf4cwib3j.css';
import '../../css/n/nsk1yu6-x.css';
import '../../css/h/hrhxeryyq.css';
import '../../css/f/f06t_wbso.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yf4cwib3j"/><path class="nsk1yu6-x"/><path class="hrhxeryyq"/><path class="f06t_wbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mouse"} {...others} />);
}

export default Component;
