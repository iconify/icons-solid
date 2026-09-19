import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w443t8s3u.css';
import '../../css/g/gjfdyql1o.css';
import '../../css/l/l-iz3rbco.css';
import '../../css/r/r4o2qhbcu.css';
import '../../css/a/a7f3xu86i.css';
import '../../css/m/miuajtbvs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w443t8s3u"/><path class="gjfdyql1o"/><ellipse class="l-iz3rbco"/><path class="r4o2qhbcu"/><ellipse class="a7f3xu86i"/><ellipse class="miuajtbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:powder"} {...others} />);
}

export default Component;
