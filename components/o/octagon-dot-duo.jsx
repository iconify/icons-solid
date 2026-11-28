import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo5zm0b2e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uxfqx7b8a.css';
import '../../css/l/lavl0lbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo5zm0b2e secondary"/><g class="dt0cm9dhy primary"><path class="uxfqx7b8a"/><path class="lavl0lbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:octagon-dot-duo"} {...others} />);
}

export default Component;
