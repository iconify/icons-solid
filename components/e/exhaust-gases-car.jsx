import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktqye4bqf.css';
import '../../css/v/v_4lcu21i.css';
import '../../css/p/pwz3xhoys.css';
import '../../css/q/qy82j44om.css';
import '../../css/i/i2hp0k2er.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vcqbyfmne.css';
import '../../css/u/upobzr8yd.css';
import '../../css/c/c_mxrz6wd.css';
import '../../css/i/ie-m-tppt.css';
import '../../css/r/rkwm-ybzt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ktqye4bqf"/><path class="v_4lcu21i"/><path class="pwz3xhoys"/><path class="qy82j44om"/><path class="i2hp0k2er"/><g class="jn8qy4bru"><path class="vcqbyfmne"/><path class="upobzr8yd"/><circle class="c_mxrz6wd"/><circle class="ie-m-tppt"/><path class="rkwm-ybzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:exhaust-gases-car"} {...others} />);
}

export default Component;
