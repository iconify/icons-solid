import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7269db2g.css';
import '../../css/l/lmrf6zs5l.css';
import '../../css/b/bs0zlccnk.css';
import '../../css/q/q7i633bxh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i7269db2g"/><path class="lmrf6zs5l"/><path class="bs0zlccnk"/><path class="q7i633bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:relieved"} {...others} />);
}

export default Component;
