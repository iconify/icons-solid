import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/g0z7_2box.css';
import '../../css/s/snovo3mvt.css';
import '../../css/y/ybsaw8b7c.css';
import '../../css/t/t293k54ns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="g0z7_2box"/><path class="snovo3mvt"/><path class="ybsaw8b7c"/><path class="t293k54ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:trash-outline"} {...others} />);
}

export default Component;
