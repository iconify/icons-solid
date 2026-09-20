import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h5mnqyb0m.css';
import '../../css/f/fr6575kny.css';
import '../../css/b/bn-xpybax.css';
import '../../css/t/tmq-x0b9f.css';
import '../../css/t/tct_c70xf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="h5mnqyb0m"/><path class="fr6575kny"/><path class="bn-xpybax"/><path class="tmq-x0b9f"/><path class="tct_c70xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fire-evacuation"} {...others} />);
}

export default Component;
