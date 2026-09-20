import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/j/jimu5dbpg.css';
import '../../css/y/y2i7rcc8a.css';
import '../../css/v/v2nc-ib8f.css';
import '../../css/p/pddsz59eo.css';
import '../../css/c/calco4bnp.css';
import '../../css/o/omifw0_6g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="jimu5dbpg"/><path clip-rule="evenodd" class="y2i7rcc8a"/><path class="v2nc-ib8f"/><path class="pddsz59eo"/><path class="calco4bnp"/><path class="omifw0_6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:money-letter-duo"} {...others} />);
}

export default Component;
