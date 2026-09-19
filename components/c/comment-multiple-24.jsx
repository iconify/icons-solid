import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v18hj6bas.css';
import '../../css/q/qrhw6roro.css';
import '../../css/f/fk3i-830m.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/n/npyhkyrja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v18hj6bas"/><path fill="url(#SVGET0gnc5P)" class="qrhw6roro"/><defs><radialGradient id="SVGET0gnc5P" cx="0" cy="0" r="1" gradientTransform="rotate(47.85 -2.174 -1.63)scale(30.3872 55.1658)" gradientUnits="userSpaceOnUse"><stop class="fk3i-830m"/><stop offset=".535" class="h0zqot9pw"/><stop offset="1" class="npyhkyrja"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:comment-multiple-24"} {...others} />);
}

export default Component;
