import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n0c7lpb3l.css';
import '../../css/h/hbjyfybbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n0c7lpb3l"/><path class="hbjyfybbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotation-one"} {...others} />);
}

export default Component;
