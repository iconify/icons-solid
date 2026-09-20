import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z_p2in-7t.css';
import '../../css/m/mpjm_8bds.css';
import '../../css/z/zbima0b7g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="z_p2in-7t"/><path class="mpjm_8bds"/><path class="zbima0b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:landing"} {...others} />);
}

export default Component;
