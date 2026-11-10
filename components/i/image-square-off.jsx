import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2qqm-b8j.css';
import '../../css/p/pe546xbff.css';
import '../../css/r/reyjw4bwg.css';
import '../../css/y/ykktmz-uv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i2qqm-b8j"/><path class="pe546xbff"/><path class="reyjw4bwg"/><path class="ykktmz-uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-square-off"} {...others} />);
}

export default Component;
