import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eb71h5gaz.css';
import '../../css/d/drf462b-h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="eb71h5gaz"/><path class="drf462b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:invisible-2"} {...others} />);
}

export default Component;
