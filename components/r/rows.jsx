import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwc9i7b3z.css';
import '../../css/m/mes47qbyz.css';
import '../../css/d/dwdymelvl.css';
import '../../css/y/yaq2kqoyj.css';
import '../../css/o/o27veobxz.css';
import '../../css/j/j_x21n87q.css';
import '../../css/x/x3wcgwonh.css';
import '../../css/a/a31yhmnzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwc9i7b3z wm-shadow"/><path class="mes47qbyz wm-k"/><path class="dwdymelvl wm-k"/><path class="wm-k yaq2kqoyj"/><path class="o27veobxz wm-k"/><path class="j_x21n87q wm-k"/><path class="wm-shine x3wcgwonh"/><path class="a31yhmnzy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:rows"} {...others} />);
}

export default Component;
