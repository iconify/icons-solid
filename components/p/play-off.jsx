import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/o/oglteutrp.css';
import '../../css/u/ujcfkoxsn.css';
import '../../css/e/ev57m9bzj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="oglteutrp"/><path clip-rule="evenodd" class="ujcfkoxsn"/></g><path clip-rule="evenodd" class="ev57m9bzj"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:play-off"} {...others} />);
}

export default Component;
