import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvp_-dbaj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yalzx3b5b.css';
import '../../css/e/eqp5nccdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yvp_-dbaj"/><g class="dt0cm9dhy primary"><path class="yalzx3b5b"/><path class="eqp5nccdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:skip-forward-duo"} {...others} />);
}

export default Component;
