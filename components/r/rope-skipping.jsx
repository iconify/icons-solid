import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6zko2bia.css';
import '../../css/z/zdoo5zbqg.css';
import '../../css/x/x7bcnabkt.css';
import '../../css/y/yy0r--bqy.css';
import '../../css/h/hwz1pbb7d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i6zko2bia"/><path class="zdoo5zbqg"/><path class="x7bcnabkt"/><path class="yy0r--bqy"/><path class="hwz1pbb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rope-skipping"} {...others} />);
}

export default Component;
