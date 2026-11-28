import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5loclb3h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xbl4n_bhz.css';
import '../../css/p/pnuw71ckt.css';
import '../../css/k/k47i19nce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5loclb3h secondary"/><g class="dt0cm9dhy primary"><path class="xbl4n_bhz"/><path class="pnuw71ckt"/><path class="k47i19nce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hotdog-duo"} {...others} />);
}

export default Component;
