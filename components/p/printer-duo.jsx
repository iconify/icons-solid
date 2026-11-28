import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-d14a6-i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q6-yzqnbc.css';
import '../../css/t/t9k8-4bbd.css';
import '../../css/u/u2_1zacnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-d14a6-i secondary"/><g class="dt0cm9dhy primary"><path class="q6-yzqnbc"/><path class="t9k8-4bbd"/><path class="u2_1zacnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:printer-duo"} {...others} />);
}

export default Component;
