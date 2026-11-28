import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hp4l88byq.css';
import '../../css/h/hx-ao3bqx.css';
import '../../css/u/ukkfx61xp.css';
import '../../css/c/cvh45bpuo.css';
import '../../css/b/bcowwmgef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hp4l88byq"/><path class="hx-ao3bqx"/><path class="ukkfx61xp"/><path class="cvh45bpuo"/><path class="bcowwmgef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:type-vertical"} {...others} />);
}

export default Component;
