import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/a/atjk8mbde.css';
import '../../css/z/zlk5iuugb.css';
import '../../css/d/dvl3-mbzr.css';
import '../../css/o/of-lgubcw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><line x1="10" x2="38" y1="16" y2="16" class="atjk8mbde"/><path class="zlk5iuugb"/><path class="dvl3-mbzr"/><path class="of-lgubcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:drink"} {...others} />);
}

export default Component;
