import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht-pz5bqy.css';
import '../../css/d/d_02web_z.css';
import '../../css/v/v7sdo0bsx.css';
import '../../css/s/sysy7ev9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ht-pz5bqy"/><path class="d_02web_z"/><path class="v7sdo0bsx"/><path class="sysy7ev9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-off"} {...others} />);
}

export default Component;
