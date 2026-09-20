import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp-zmabdk.css';
import '../../css/r/rrklbmuzh.css';
import '../../css/z/zem9k1eun.css';
import '../../css/t/tjho2_-dd.css';
import '../../css/m/mebo6qfse.css';
import '../../css/k/kmsf33cda.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bp-zmabdk"/><path class="rrklbmuzh"/><path class="zem9k1eun"/><path class="tjho2_-dd"/><path class="mebo6qfse"/><path class="kmsf33cda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kitsu-light"} {...others} />);
}

export default Component;
