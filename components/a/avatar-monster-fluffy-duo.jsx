import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/op-iys7gm.css';
import '../../css/a/alio6gcxk.css';
import '../../css/v/v6yy0cbrr.css';
import '../../css/l/lfeqacy5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="op-iys7gm"/><path class="alio6gcxk wm-a"/><path class="v6yy0cbrr"/><path class="lfeqacy5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-fluffy-duo"} {...others} />);
}

export default Component;
