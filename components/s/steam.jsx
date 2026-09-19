import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsofbs0hl.css';
import '../../css/s/sl2chczps.css';
import '../../css/u/ub4ctds7g.css';
import '../../css/p/pj-urkbsg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nsofbs0hl"/><g class="sl2chczps"><path class="ub4ctds7g"/><path class="pj-urkbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:steam"} {...others} />);
}

export default Component;
