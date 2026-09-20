import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/j/jzmcwbcir.css';
import '../../css/e/eqkqqotwi.css';
import '../../css/j/j2zdbx-wa.css';
import '../../css/y/yflamkbxh.css';
import '../../css/j/jeasdzbmb.css';
import '../../css/d/d62uvjacn.css';
import '../../css/g/g7ao5tbbo.css';
import '../../css/v/vlcvr1_es.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="jzmcwbcir"/><path class="eqkqqotwi"/><path class="j2zdbx-wa"/><path class="yflamkbxh"/><path class="jeasdzbmb"/><path class="d62uvjacn"/><path class="g7ao5tbbo"/><path class="vlcvr1_es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:reindeer"} {...others} />);
}

export default Component;
