import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/capbwntcm.css';
import '../../css/n/nyzyrnbec.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="capbwntcm"/><path clip-rule="evenodd" class="nyzyrnbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:auto-flash-flat"} {...others} />);
}

export default Component;
