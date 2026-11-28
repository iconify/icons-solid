import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0j56bbrs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll59ytbdg.css';
import '../../css/h/h9q9mhboc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0j56bbrs secondary"/><g class="dt0cm9dhy primary"><path class="ll59ytbdg"/><circle class="h9q9mhboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:settings-duo"} {...others} />);
}

export default Component;
