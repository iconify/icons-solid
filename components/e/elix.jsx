import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amduqc0dt.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rogwawkzk.css';
import '../../css/s/stxaasbpx.css';
import '../../css/g/gxcfmpble.css';
import '../../css/m/muh6_ibba.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="amduqc0dt"/><g class="n1mjunbsu"><path class="rogwawkzk"/><path class="stxaasbpx"/><path class="gxcfmpble"/><path class="muh6_ibba"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:elix"} {...others} />);
}

export default Component;
