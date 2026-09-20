import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzk555emz.css';
import '../../css/x/xnc6gibrv.css';
import '../../css/z/z48-avcpx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xzk555emz"/><path class="xnc6gibrv"/><path class="z48-avcpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:film-slate"} {...others} />);
}

export default Component;
