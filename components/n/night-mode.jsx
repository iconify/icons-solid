import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rj80pbb9l.css';
import '../../css/r/r4lc0mb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="rj80pbb9l"/><path class="r4lc0mb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:night-mode"} {...others} />);
}

export default Component;
