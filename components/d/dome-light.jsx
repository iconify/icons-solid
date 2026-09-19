import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eb9t03b4i.css';
import '../../css/x/x7sf2z-_n.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="nz_20wbpz"><path class="eb9t03b4i"/><path class="x7sf2z-_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:dome-light"} {...others} />);
}

export default Component;
