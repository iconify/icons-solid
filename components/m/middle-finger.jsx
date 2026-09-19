import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/mpeuit2qe.css';
import '../../css/u/uv1zd2b2b.css';
import '../../css/v/vawf-rboz.css';
import '../../css/l/l4z9zzgzz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="mpeuit2qe"/><path class="uv1zd2b2b"/><path class="vawf-rboz"/><path class="l4z9zzgzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:middle-finger"} {...others} />);
}

export default Component;
