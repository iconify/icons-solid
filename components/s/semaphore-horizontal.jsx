import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bzd85mb1e.css';
import '../../css/s/si_kdro5v.css';
import '../../css/t/t9_fncbua.css';
import '../../css/b/bva54-bib.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/f/feq4zxb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bzd85mb1e"/><path class="si_kdro5v"/><path class="t9_fncbua"/><path class="bva54-bib"/><path class="zrlh-6b7n"/><path class="feq4zxb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:semaphore-horizontal"} {...others} />);
}

export default Component;
