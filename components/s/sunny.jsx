import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmdq55b7z.css';
import '../../css/s/smqvhfu5m.css';
import '../../css/j/j379bzbxd.css';
import '../../css/s/sei9facvr.css';
import '../../css/h/hzn6a7bod.css';
import '../../css/x/x1877xbqt.css';
import '../../css/r/r46ls3b3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fmdq55b7z"/><path class="smqvhfu5m"/><path class="j379bzbxd"/><path class="sei9facvr"/><path class="hzn6a7bod"/><path class="x1877xbqt"/><path class="r46ls3b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sunny"} {...others} />);
}

export default Component;
