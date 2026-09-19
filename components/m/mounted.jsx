import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/q/q7_t6rbsc.css';
import '../../css/z/zxawc9bph.css';
import '../../css/f/fkrmm14ap.css';
import '../../css/i/i_hbqwbmk.css';
import '../../css/m/m2ojtibmq.css';
import '../../css/w/w4jltkmwy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="q7_t6rbsc"/><path class="zxawc9bph"/><path class="fkrmm14ap"/><circle class="i_hbqwbmk"/><path class="m2ojtibmq"/><path class="w4jltkmwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mounted"} {...others} />);
}

export default Component;
