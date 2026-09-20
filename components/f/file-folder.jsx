import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/i3iq91bdy.css';
import '../../css/g/g_ozs_7xf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="i3iq91bdy"/><path class="g_ozs_7xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:file-folder"} {...others} />);
}

export default Component;
