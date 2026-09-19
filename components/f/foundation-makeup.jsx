import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a7b-4cxey.css';
import '../../css/r/roa4jsr0h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="a7b-4cxey"/><path class="roa4jsr0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:foundation-makeup"} {...others} />);
}

export default Component;
