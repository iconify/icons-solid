import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/x/xej33zjxs.css';
import '../../css/t/tf2ss2pwj.css';
import '../../css/p/pg-805vaw.css';
import '../../css/x/x_utdxxws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="xej33zjxs"/><path class="tf2ss2pwj"/><path class="pg-805vaw"/><path class="x_utdxxws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:prism-2-duo"} {...others} />);
}

export default Component;
