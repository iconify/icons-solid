import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/of31x1y7m.css';
import '../../css/q/qm72ynbos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="of31x1y7m"/><path class="qm72ynbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bell-light"} {...others} />);
}

export default Component;
