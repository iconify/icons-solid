import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eb3ye2byy.css';
import '../../css/b/bmei7-vkt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eb3ye2byy"/><path class="bmei7-vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:go-end"} {...others} />);
}

export default Component;
