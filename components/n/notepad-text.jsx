import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/jl5ph-bdp.css';
import '../../css/c/cequp8b6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="jl5ph-bdp"/><path class="cequp8b6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:notepad-text"} {...others} />);
}

export default Component;
