import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epkx3sbsn.css';
import '../../css/g/g95egibna.css';
import '../../css/u/us88oybum.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="epkx3sbsn"/><path class="g95egibna"/><path class="us88oybum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:layout-right-sidebar"} {...others} />);
}

export default Component;
