import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cw36_6mco.css';
import '../../css/l/lw3ir5-go.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cw36_6mco wm-a"/><path class="lw3ir5-go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-scatter"} {...others} />);
}

export default Component;
