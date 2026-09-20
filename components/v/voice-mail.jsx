import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ydwi29bvh.css';
import '../../css/d/dztg_0iwx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ydwi29bvh"/><path class="dztg_0iwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:voice-mail"} {...others} />);
}

export default Component;
