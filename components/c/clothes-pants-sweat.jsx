import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/olbdy62vw.css';
import '../../css/e/er6jam89u.css';
import '../../css/n/n6zdtvbbl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="olbdy62vw"/><path class="er6jam89u"/><path class="n6zdtvbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clothes-pants-sweat"} {...others} />);
}

export default Component;
