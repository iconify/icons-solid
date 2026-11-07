import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py1haibyr.css';
import '../../css/r/rl670hs1g.css';
import '../../css/f/f-98sr1ba.css';
import '../../css/y/y608-6bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="py1haibyr"/><path class="rl670hs1g"/><path class="f-98sr1ba"/><path class="y608-6bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-cross-pen-bold"} {...others} />);
}

export default Component;
