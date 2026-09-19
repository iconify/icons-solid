import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx30rb9t.css';
import '../../css/l/li4b_wx_f.css';
import '../../css/y/yn221v8dj.css';
import '../../css/r/rdtgsqklo.css';
import '../../css/p/p5pfambtc.css';
import '../../css/f/f-2ktvb6x.css';
import '../../css/t/tnqkjxb-y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="btx30rb9t"><path class="li4b_wx_f"/><path class="yn221v8dj"/><path class="rdtgsqklo"/><path class="p5pfambtc"/><path class="f-2ktvb6x"/><path class="tnqkjxb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weightlifting"} {...others} />);
}

export default Component;
