import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kv76-bb8i.css';
import '../../css/m/mivh__bmk.css';
import '../../css/m/mqs282b7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="kv76-bb8i"/><path class="mivh__bmk"/><path class="mqs282b7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lost-and-found"} {...others} />);
}

export default Component;
