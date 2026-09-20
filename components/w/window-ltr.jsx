import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3epgsb1m.css';
import '../../css/h/hu6j50bjd.css';
import '../../css/f/f_ebgjbid.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x3epgsb1m"/><path class="hu6j50bjd"/><circle class="f_ebgjbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:window-ltr"} {...others} />);
}

export default Component;
