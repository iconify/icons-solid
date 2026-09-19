import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qjv144bhu.css';
import '../../css/h/htd-6b90f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qjv144bhu"/><path class="htd-6b90f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-rotation-none"} {...others} />);
}

export default Component;
