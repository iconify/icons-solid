import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a72uze7-g.css';
import '../../css/c/cm8ojeb9d.css';
import '../../css/u/uboxyudmy.css';
import '../../css/x/xp4b6fbxp.css';
import '../../css/v/vsu_nfuco.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a72uze7-g"/><path class="cm8ojeb9d"/><path class="uboxyudmy"/><path class="xp4b6fbxp"/><path class="vsu_nfuco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fritz"} {...others} />);
}

export default Component;
