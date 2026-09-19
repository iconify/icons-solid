import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/g-dt69bib.css';
import '../../css/p/pb9zx5xda.css';
import '../../css/s/sk-ndry4s.css';
import '../../css/l/l93qfyobs.css';
import '../../css/v/vr56cx7jt.css';
import '../../css/y/yuosm9b2l.css';
import '../../css/o/owtqjzbbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="g-dt69bib"/><path class="pb9zx5xda"/><path class="sk-ndry4s"/><path class="l93qfyobs"/><path class="vr56cx7jt"/><path class="yuosm9b2l"/><path class="owtqjzbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:user-to-user-transmission"} {...others} />);
}

export default Component;
