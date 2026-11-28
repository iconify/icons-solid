import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igi5v8bda.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qxqm7i1xs.css';
import '../../css/p/pp1fe4bxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="igi5v8bda secondary"/><g class="dt0cm9dhy primary"><path class="qxqm7i1xs"/><path class="pp1fe4bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-duo"} {...others} />);
}

export default Component;
