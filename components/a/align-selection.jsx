import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mxq0yubtx.css';
import '../../css/z/z_kassb2s.css';
import '../../css/v/v0_v-zqjl.css';
import '../../css/j/j9ptcwbzw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mxq0yubtx"/><path class="z_kassb2s"/><path class="v0_v-zqjl"/><path class="j9ptcwbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:align-selection"} {...others} />);
}

export default Component;
