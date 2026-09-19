import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/v/v6tj5lb1y.css';
import '../../css/i/ite4rnbur.css';
import '../../css/h/h1hal_are.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="v6tj5lb1y"/><path class="ite4rnbur"/><path class="h1hal_are"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ad"} {...others} />);
}

export default Component;
