import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zzdwbdbds.css';
import '../../css/a/a7z4qrb3g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="zzdwbdbds"/><path class="a7z4qrb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:government-building-1"} {...others} />);
}

export default Component;
