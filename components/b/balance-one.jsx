import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/d/dj7oebbfk.css';
import '../../css/r/rg511obvo.css';
import '../../css/t/t0v4pnbgw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="dj7oebbfk"/><path class="rg511obvo"/><path class="t0v4pnbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:balance-one"} {...others} />);
}

export default Component;
