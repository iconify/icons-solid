import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgx_xqrxm.css';
import '../../css/s/s4u4mwd8i.css';
import '../../css/z/z1x1i436g.css';
import '../../css/y/y8k1p8bke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wgx_xqrxm"/><path class="s4u4mwd8i"/><path class="z1x1i436g"/><path class="y8k1p8bke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:compass"} {...others} />);
}

export default Component;
