import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vjps25b7w.css';
import '../../css/q/qzcy3vbka.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="vjps25b7w"/><path class="qzcy3vbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:icecream"} {...others} />);
}

export default Component;
