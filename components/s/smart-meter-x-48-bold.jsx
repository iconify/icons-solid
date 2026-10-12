import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clchgpbjo.css';
import '../../css/q/qvo2fwbpx.css';
import '../../css/r/rmh8yimxi.css';
import '../../css/w/wq8vaxb7s.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="clchgpbjo"/><path class="qvo2fwbpx"/><path class="rmh8yimxi"/><path class="wq8vaxb7s"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-x-48-bold"} {...others} />);
}

export default Component;
