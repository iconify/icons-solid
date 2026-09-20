import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwzp-9bry.css';
import '../../css/o/o13y44s_y.css';
import '../../css/e/es3-6mhad.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qwzp-9bry"/><path class="o13y44s_y"/><path class="es3-6mhad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:projector-screen-flat"} {...others} />);
}

export default Component;
