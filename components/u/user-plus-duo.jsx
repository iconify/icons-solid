import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqoua65yl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/it6ujub8j.css';
import '../../css/h/h2pokhbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqoua65yl secondary"/><g class="dt0cm9dhy primary"><path class="it6ujub8j"/><path class="h2pokhbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:user-plus-duo"} {...others} />);
}

export default Component;
