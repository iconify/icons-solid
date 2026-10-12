import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na3nwbb0o.css';
import '../../css/o/op9e02b7c.css';
import '../../css/p/p7svkwbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="na3nwbb0o"/><path class="op9e02b7c"/><path class="p7svkwbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-cry"} {...others} />);
}

export default Component;
