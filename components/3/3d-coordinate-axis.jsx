import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dbuvyfbjz.css';
import '../../css/b/b34vnnp7g.css';
import '../../css/f/fjgi-8bae.css';
import '../../css/p/pv71rbcok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="dbuvyfbjz"/><path class="b34vnnp7g"/><path class="fjgi-8bae"/><path class="pv71rbcok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:3d-coordinate-axis"} {...others} />);
}

export default Component;
