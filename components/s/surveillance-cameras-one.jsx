import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pjotv2p9i.css';
import '../../css/m/my79heyuo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="pjotv2p9i"/><path class="my79heyuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:surveillance-cameras-one"} {...others} />);
}

export default Component;
