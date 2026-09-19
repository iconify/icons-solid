import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q30h_ub4q.css';
import '../../css/j/jt5qtmb5c.css';
import '../../css/e/eja3lnjju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q30h_ub4q"/><path class="jt5qtmb5c"/><path class="eja3lnjju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:amex"} {...others} />);
}

export default Component;
