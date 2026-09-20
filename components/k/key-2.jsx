import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flojtzjpe.css';
import '../../css/q/qg6t_9u2t.css';
import '../../css/p/pjtqjjb0u.css';
import '../../css/u/uj2whhbmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="flojtzjpe"/><path class="qg6t_9u2t"/><path class="pjtqjjb0u"/><path class="uj2whhbmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:key-2"} {...others} />);
}

export default Component;
