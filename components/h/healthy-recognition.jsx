import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rm8wk1b8h.css';
import '../../css/a/aal9x10ga.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rm8wk1b8h"/><path class="aal9x10ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:healthy-recognition"} {...others} />);
}

export default Component;
