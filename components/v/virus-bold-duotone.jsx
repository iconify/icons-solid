import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkk5qjbpi.css';
import '../../css/d/dy8e20s8g.css';
import '../../css/x/xl8fv4blq.css';
import '../../css/h/hbdnltbyy.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/sy40yix0t.css';
import '../../css/g/gdiwzjkte.css';
import '../../css/q/q205h5bvb.css';
import '../../css/e/e7l6l55qu.css';
import '../../css/n/nx7-mnnre.css';
import '../../css/w/wj6vq5a-u.css';
import '../../css/a/af0kdyj6e.css';
import '../../css/i/ira069vrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkk5qjbpi"/><path clip-rule="evenodd" class="dy8e20s8g"/><path class="xl8fv4blq"/><path class="hbdnltbyy"/><g class="xtpeb-edw"><path class="sy40yix0t"/><path class="gdiwzjkte"/><path class="q205h5bvb"/><path class="e7l6l55qu"/><path class="nx7-mnnre"/><path class="wj6vq5a-u"/><path class="af0kdyj6e"/><path class="ira069vrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:virus-bold-duotone"} {...others} />);
}

export default Component;
