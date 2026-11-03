import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsnyatslk.css';
import '../../css/e/eacht384o.css';
import '../../css/e/eomgn6xaw.css';
import '../../css/v/vabgvhplk.css';
import '../../css/t/tawi2lsdc.css';
import '../../css/v/vr2clrb9d.css';

const viewBox = {"width":200,"height":300};
const content = `<path class="qsnyatslk"/><path class="eacht384o"/><g class="eomgn6xaw"><path class="vabgvhplk"/><path class="tawi2lsdc"/><path class="vr2clrb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:radicale"} {...others} />);
}

export default Component;
