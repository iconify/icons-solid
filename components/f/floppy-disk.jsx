import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm9ybacuk.css';
import '../../css/b/by_1x0pgb.css';
import '../../css/v/v9muaabmj.css';
import '../../css/r/rq5_dmbfx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dm9ybacuk"/><path class="by_1x0pgb"/><path class="v9muaabmj"/><path class="rq5_dmbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:floppy-disk"} {...others} />);
}

export default Component;
