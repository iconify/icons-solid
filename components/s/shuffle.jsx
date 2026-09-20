import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x4jim4w2k.css';
import '../../css/s/sh7spuq1c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="x4jim4w2k"/><path class="sh7spuq1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shuffle"} {...others} />);
}

export default Component;
