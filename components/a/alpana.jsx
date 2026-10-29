import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l06-9oytq.css';
import '../../css/u/ubqjuiwcx.css';
import '../../css/q/q2kztf1hp.css';
import '../../css/j/j0fsfzb3c.css';
import '../../css/s/sbdd75ygf.css';
import '../../css/m/mnfak4bmt.css';
import '../../css/w/wi7bpabxk.css';
import '../../css/p/pt7hbf2ny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l06-9oytq wm-shadow"/><path class="ubqjuiwcx wm-k"/><path class="q2kztf1hp wm-k"/><path class="j0fsfzb3c wm-a"/><path class="sbdd75ygf wm-a"/><path class="mnfak4bmt wm-a"/><path class="wi7bpabxk wm-a"/><path class="pt7hbf2ny wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:alpana"} {...others} />);
}

export default Component;
