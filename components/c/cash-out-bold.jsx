import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bun2tveba.css';
import '../../css/j/jkjtg1bfn.css';
import '../../css/v/vf4j3wl2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bun2tveba"/><path class="jkjtg1bfn"/><path class="vf4j3wl2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cash-out-bold"} {...others} />);
}

export default Component;
