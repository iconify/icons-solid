import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wecs8qb0v.css';
import '../../css/n/n2f9v2_fd.css';
import '../../css/d/dmdo3ub8o.css';
import '../../css/d/ddigii7tx.css';
import '../../css/q/qsjhy2sbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wecs8qb0v wm-shadow"/><path class="n2f9v2_fd wm-k"/><path class="dmdo3ub8o wm-k"/><path class="ddigii7tx wm-a"/><path class="qsjhy2sbf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevrons-left"} {...others} />);
}

export default Component;
