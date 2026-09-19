import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x6knv9d5h.css';
import '../../css/f/fvfvc2b4u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="x6knv9d5h"/><circle class="fvfvc2b4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-skates"} {...others} />);
}

export default Component;
