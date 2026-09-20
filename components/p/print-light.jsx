import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zx3c59bla.css';
import '../../css/r/r35ut50dp.css';
import '../../css/x/x6azqpbbl.css';
import '../../css/x/x4eme2b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="zx3c59bla"/><path class="r35ut50dp"/><path class="x6azqpbbl"/><path class="x4eme2b-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:print-light"} {...others} />);
}

export default Component;
