import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/o/o5i_ntbzq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="bwpzy-b4l"/><path class="o5i_ntbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:storage-card-two"} {...others} />);
}

export default Component;
