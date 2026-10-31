import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtdee3zsb.css';
import '../../css/a/agz0iqbtx.css';
import '../../css/z/zo82iz4es.css';
import '../../css/v/v93lekbra.css';
import '../../css/q/q_wqe0eay.css';
import '../../css/y/yhrvmqbgv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mtdee3zsb"/><circle class="agz0iqbtx"/><circle class="zo82iz4es"/><path class="v93lekbra"/><path class="q_wqe0eay"/><path clip-rule="evenodd" class="yhrvmqbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:angry-face"} {...others} />);
}

export default Component;
