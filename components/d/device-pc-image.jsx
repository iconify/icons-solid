import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcdfnub0v.css';
import '../../css/g/gmn26m0eu.css';
import '../../css/q/qtq5x3s7v.css';
import '../../css/b/bpc-esnpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="rcdfnub0v"/><path class="gmn26m0eu"/><path class="qtq5x3s7v"/><path class="bpc-esnpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-image"} {...others} />);
}

export default Component;
