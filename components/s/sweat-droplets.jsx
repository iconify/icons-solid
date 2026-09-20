import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es_julb3f.css';
import '../../css/f/fffoeubbe.css';
import '../../css/d/dxbo5w2dx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="es_julb3f"/><path class="fffoeubbe"/><path class="dxbo5w2dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sweat-droplets"} {...others} />);
}

export default Component;
