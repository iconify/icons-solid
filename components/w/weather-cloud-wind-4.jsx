import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr-vdh1no.css';
import '../../css/k/ks_bexdgf.css';
import '../../css/d/daty13zlt.css';
import '../../css/s/sx5licccz.css';
import '../../css/n/ni8ct25jn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mr-vdh1no"/><path class="ks_bexdgf"/><path class="daty13zlt"/><path class="sx5licccz"/><path class="ni8ct25jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:weather-cloud-wind-4"} {...others} />);
}

export default Component;
