import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/s/s72ch7lqv.css';
import '../../css/p/p20uz5x5n.css';
import '../../css/q/q7b9l6bbc.css';
import '../../css/r/rmsawdb-k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="s72ch7lqv"/><path class="p20uz5x5n"/><path class="q7b9l6bbc"/><path class="rmsawdb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hat-2"} {...others} />);
}

export default Component;
