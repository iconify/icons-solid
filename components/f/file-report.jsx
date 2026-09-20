import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/i08u7-pxf.css';
import '../../css/i/i2pmspbzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="i08u7-pxf"/><path class="i2pmspbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:file-report"} {...others} />);
}

export default Component;
