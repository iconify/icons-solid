import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ljqma2qlw.css';
import '../../css/r/rro4tf7wv.css';
import '../../css/s/si_kdro5v.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/s/s44gjmwtx.css';
import '../../css/p/plzwfyb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ljqma2qlw"/><path class="rro4tf7wv"/><path class="si_kdro5v"/><path class="zrlh-6b7n"/><path class="s44gjmwtx"/><path class="plzwfyb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:more-horizontal"} {...others} />);
}

export default Component;
