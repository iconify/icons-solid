import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdy82lzik.css';
import '../../css/g/g7m-emn5c.css';
import '../../css/q/qfxpl-fnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wdy82lzik"/><path class="g7m-emn5c"/><path class="qfxpl-fnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:megaphone"} {...others} />);
}

export default Component;
