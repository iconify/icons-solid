import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvavq2wyy.css';
import '../../css/i/iy5iz5l3t.css';
import '../../css/a/aua8iibsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvavq2wyy"/><path class="iy5iz5l3t"/><path class="aua8iibsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:layers-half"} {...others} />);
}

export default Component;
