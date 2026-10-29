import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j1zl5-bua.css';
import '../../css/g/gn83_cb7i.css';
import '../../css/j/j1_apjast.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j1zl5-bua"/><path class="gn83_cb7i wm-a"/><path class="j1_apjast"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:air-vent-duo"} {...others} />);
}

export default Component;
