import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbpwmytgh.css';
import '../../css/m/m6omgn3hc.css';
import '../../css/f/fbqsjxnbt.css';
import '../../css/q/qho2-b78i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jbpwmytgh"/><path class="m6omgn3hc"/><path class="fbqsjxnbt"/><path class="qho2-b78i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forest-20-bold"} {...others} />);
}

export default Component;
