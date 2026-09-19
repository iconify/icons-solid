import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1xvv5o9m.css';
import '../../css/l/lf8df-bzw.css';
import '../../css/w/wq98j9bru.css';
import '../../css/z/z4sky5pco.css';
import '../../css/r/r3reqybzv.css';
import '../../css/h/hy-wv9bfg.css';
import '../../css/l/lqls7tb0a.css';
import '../../css/s/s43rmgf9q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="d1xvv5o9m"/><path class="lf8df-bzw"/><path class="wq98j9bru"/><circle class="z4sky5pco"/><circle class="r3reqybzv"/><path class="hy-wv9bfg"/><path class="lqls7tb0a"/><path class="s43rmgf9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dog"} {...others} />);
}

export default Component;
