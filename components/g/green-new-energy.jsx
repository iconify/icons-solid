import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u5e3th2av.css';
import '../../css/t/tzj5x4bar.css';
import '../../css/u/uo51vdbbb.css';
import '../../css/f/fjf0hmbod.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="u5e3th2av"/><path class="tzj5x4bar"/><path class="uo51vdbbb"/><path class="fjf0hmbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:green-new-energy"} {...others} />);
}

export default Component;
