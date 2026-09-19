import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lf83cxb8z.css';
import '../../css/r/r92b4u03o.css';
import '../../css/d/dvoq2tmyv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lf83cxb8z"/><path class="r92b4u03o"/><path class="dvoq2tmyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hourglass-null"} {...others} />);
}

export default Component;
