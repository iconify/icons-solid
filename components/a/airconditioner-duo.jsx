import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttbiemmoy.css';
import '../../css/o/oioitz8yu.css';
import '../../css/n/nhzwjvoaj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ttbiemmoy"/><path class="oioitz8yu"/><path class="nhzwjvoaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:airconditioner-duo"} {...others} />);
}

export default Component;
