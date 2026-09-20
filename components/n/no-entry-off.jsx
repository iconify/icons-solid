import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eqydb4bpg.css';
import '../../css/r/rd39nqbvy.css';
import '../../css/o/op837nbch.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eqydb4bpg"/><path clip-rule="evenodd" class="rd39nqbvy"/><path clip-rule="evenodd" class="op837nbch"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:no-entry-off"} {...others} />);
}

export default Component;
