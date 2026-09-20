import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/l/ly-2njb2x.css';
import '../../css/f/f35vh31_y.css';
import '../../css/u/u_fw-_buq.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><circle class="ly-2njb2x"/><path class="f35vh31_y"/><path class="u_fw-_buq"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-north-korea"} {...others} />);
}

export default Component;
