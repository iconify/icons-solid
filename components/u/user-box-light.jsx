import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/e57ldqyuj.css';
import '../../css/p/pwbt2qflx.css';
import '../../css/j/jdy6ymapr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="e57ldqyuj"/><circle class="pwbt2qflx"/><rect class="jdy6ymapr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-box-light"} {...others} />);
}

export default Component;
