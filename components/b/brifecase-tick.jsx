import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/in6eljbub.css';
import '../../css/k/ka7ja9bqm.css';
import '../../css/i/ix42ztqvi.css';
import '../../css/w/wbrxz8bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="in6eljbub"/><path class="ka7ja9bqm"/><path class="ix42ztqvi"/><path class="wbrxz8bqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brifecase-tick"} {...others} />);
}

export default Component;
