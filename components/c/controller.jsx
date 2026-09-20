import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dv0o9bjrv.css';
import '../../css/n/nwfps6kqr.css';
import '../../css/u/uzr9r6dce.css';
import '../../css/p/pgxuijb2o.css';
import '../../css/x/x9nhjgblq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="dv0o9bjrv"/><path class="nwfps6kqr"/><path clip-rule="evenodd" class="uzr9r6dce"/><path class="pgxuijb2o"/><path class="x9nhjgblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:controller"} {...others} />);
}

export default Component;
