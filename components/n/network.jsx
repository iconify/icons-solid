import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-13f8bxy.css';
import '../../css/z/z071tsrid.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/n/n5m00cbmk.css';
import '../../css/n/n558ijp8m.css';
import '../../css/x/xr5abmbcz.css';
import '../../css/f/fhnmm5bky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a-13f8bxy"/><path class="z071tsrid"/><path class="x19qmcbwy"/><path class="n5m00cbmk"/><path class="n558ijp8m"/><path class="xr5abmbcz"/><path class="fhnmm5bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:network"} {...others} />);
}

export default Component;
