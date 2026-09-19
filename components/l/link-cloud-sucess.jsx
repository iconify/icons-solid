import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mi2wm9b-w.css';
import '../../css/t/tmqze-b-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mi2wm9b-w"/><path class="tmqze-b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-cloud-sucess"} {...others} />);
}

export default Component;
