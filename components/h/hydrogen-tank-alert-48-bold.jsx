import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt4rwqbhp.css';
import '../../css/e/ekmyd2l1t.css';
import '../../css/o/olgt4becl.css';
import '../../css/u/ujf-0j9rf.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tt4rwqbhp"/><path class="ekmyd2l1t"/><path class="olgt4becl"/><path class="ujf-0j9rf"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-alert-48-bold"} {...others} />);
}

export default Component;
