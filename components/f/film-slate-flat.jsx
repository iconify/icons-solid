import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0o4_5bdu.css';
import '../../css/k/k2u2jj93x.css';
import '../../css/k/k6xi7m4tz.css';
import '../../css/v/vw722cqhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="d0o4_5bdu"/><path class="k2u2jj93x"/><path class="k6xi7m4tz"/><path class="vw722cqhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:film-slate-flat"} {...others} />);
}

export default Component;
