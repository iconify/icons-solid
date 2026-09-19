import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsplo5bng.css';
import '../../css/z/zj7p6wbad.css';
import '../../css/w/wr1w-sbdc.css';
import '../../css/a/awxnmibuv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qsplo5bng"/><path class="zj7p6wbad"/><ellipse class="wr1w-sbdc"/><ellipse class="awxnmibuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:faceu"} {...others} />);
}

export default Component;
