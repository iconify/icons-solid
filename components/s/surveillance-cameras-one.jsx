import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pjotv2p9i.css';
import '../../css/e/eg20czblp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="pjotv2p9i"/><path class="eg20czblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:surveillance-cameras-one"} {...others} />);
}

export default Component;
