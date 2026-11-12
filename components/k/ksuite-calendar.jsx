import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at_v43b2r.css';
import '../../css/b/b9e_alb_d.css';
import '../../css/e/eftbzl7cx.css';
import '../../css/g/g4ssyewpa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="at_v43b2r"/><path class="b9e_alb_d"/><path class="eftbzl7cx"/><path class="g4ssyewpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-calendar"} {...others} />);
}

export default Component;
