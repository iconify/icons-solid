import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/ii2w94bmc.css';
import '../../css/u/ufglowt-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ii2w94bmc"/><path class="ufglowt-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wine"} {...others} />);
}

export default Component;
