import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tbp4npmpq.css';
import '../../css/e/engxm5j0v.css';
import '../../css/b/bqs72zb9t.css';
import '../../css/h/hqte10bgo.css';
import '../../css/c/c1pnlkmkq.css';
import '../../css/y/yb5tb3b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tbp4npmpq"/><path class="engxm5j0v"/><path class="bqs72zb9t"/><path class="hqte10bgo"/><path class="c1pnlkmkq"/><path class="yb5tb3b2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-identifier-card"} {...others} />);
}

export default Component;
