import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl7e_3beo.css';
import '../../css/b/bzfqh4pxl.css';
import '../../css/r/rurh1k3ru.css';
import '../../css/q/q67g-x7ec.css';
import '../../css/r/raquohbsn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cl7e_3beo"/><path class="bzfqh4pxl"/><path class="rurh1k3ru"/><path class="q67g-x7ec"/><path class="raquohbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:target"} {...others} />);
}

export default Component;
