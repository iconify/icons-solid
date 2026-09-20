import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/df63occqr.css';
import '../../css/j/jo-80bb1d.css';
import '../../css/k/k5c2t3b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="df63occqr"/><path class="jo-80bb1d"/><path class="k5c2t3b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:rose-2"} {...others} />);
}

export default Component;
