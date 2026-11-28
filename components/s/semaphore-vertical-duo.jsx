import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzw3lfyzm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nm0upy-ot.css';
import '../../css/s/si_kdro5v.css';
import '../../css/l/llote6btr.css';
import '../../css/i/i08jl4bew.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/z/zx8tu8xro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary uzw3lfyzm"/><g class="dt0cm9dhy primary"><path class="nm0upy-ot"/><path class="si_kdro5v"/><path class="llote6btr"/><path class="i08jl4bew"/><path class="zrlh-6b7n"/><path class="zx8tu8xro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:semaphore-vertical-duo"} {...others} />);
}

export default Component;
