import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j9e3e3d4k.css';
import '../../css/z/ztlja6dve.css';
import '../../css/q/qhe5g9b1p.css';
import '../../css/u/uc9om7bwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j9e3e3d4k"/><path class="ztlja6dve"/><path class="qhe5g9b1p"/><path class="uc9om7bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:delete-keyboard"} {...others} />);
}

export default Component;
