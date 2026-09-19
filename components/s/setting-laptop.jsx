import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kbesibb3g.css';
import '../../css/h/h1tke7swh.css';
import '../../css/x/x2401pk9v.css';
import '../../css/g/g6li1jbuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="kbesibb3g"/><path class="h1tke7swh"/><circle class="x2401pk9v"/><path class="g6li1jbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:setting-laptop"} {...others} />);
}

export default Component;
