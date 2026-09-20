import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nzfacpbuy.css';
import '../../css/d/d54lipb6l.css';
import '../../css/u/u78nidc3z.css';
import '../../css/w/webu_gbze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nzfacpbuy"/><path class="d54lipb6l"/><path class="u78nidc3z"/><path class="webu_gbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:webcam-off"} {...others} />);
}

export default Component;
