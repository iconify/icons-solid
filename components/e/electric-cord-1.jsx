import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nqbn7tbjw.css';
import '../../css/f/fbx9uybiy.css';
import '../../css/i/i0ge2abvs.css';
import '../../css/m/mm144gy7y.css';
import '../../css/u/urza5ab2x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nqbn7tbjw"/><path class="fbx9uybiy"/><path class="i0ge2abvs"/><path class="mm144gy7y"/><path class="urza5ab2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:electric-cord-1"} {...others} />);
}

export default Component;
