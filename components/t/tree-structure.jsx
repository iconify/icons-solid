import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0i398m6x.css';
import '../../css/a/ay6c3pb8e.css';
import '../../css/m/msp76tw5p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e0i398m6x"/><path class="ay6c3pb8e"/><path class="msp76tw5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:tree-structure"} {...others} />);
}

export default Component;
