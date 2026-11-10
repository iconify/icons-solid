import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2501nsyy.css';
import '../../css/e/er2yt42iv.css';
import '../../css/j/jj3ofccfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l2501nsyy"/><path class="er2yt42iv"/><path class="jj3ofccfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:downscale"} {...others} />);
}

export default Component;
