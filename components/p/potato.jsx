import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tps0pable.css';
import '../../css/l/lrkc4ubzw.css';
import '../../css/s/sgl_4_kwk.css';
import '../../css/t/tbw07rbmi.css';
import '../../css/h/ho9l-mb_n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="tps0pable"/><path class="lrkc4ubzw"/><path class="sgl_4_kwk"/><path class="tbw07rbmi"/><path class="ho9l-mb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:potato"} {...others} />);
}

export default Component;
