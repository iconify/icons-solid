import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ls3i9tb5u.css';
import '../../css/r/r7u3_lblh.css';
import '../../css/f/f6-bjdasf.css';
import '../../css/m/mq76rl-uo.css';
import '../../css/u/u_zk5lblv.css';
import '../../css/u/ulmwtccii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ls3i9tb5u"/><path class="r7u3_lblh wm-a"/><path class="f6-bjdasf"/><path class="mq76rl-uo wm-a"/><path class="u_zk5lblv"/><path class="ulmwtccii wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:salad-duo"} {...others} />);
}

export default Component;
