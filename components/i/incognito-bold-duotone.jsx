import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jajc9k77y.css';
import '../../css/s/s_tz82bpo.css';
import '../../css/c/clztyml9n.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/t0_5lgbdo.css';
import '../../css/n/nmse1bcme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jajc9k77y"/><path class="s_tz82bpo"/><path class="clztyml9n"/><g class="xtpeb-edw"><path class="t0_5lgbdo"/><path class="nmse1bcme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:incognito-bold-duotone"} {...others} />);
}

export default Component;
