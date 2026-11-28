import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omc_zcbqx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/a/axddwob9t.css';
import '../../css/n/nnui93btw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omc_zcbqx secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="axddwob9t"/><path class="nnui93btw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-lock-duo"} {...others} />);
}

export default Component;
