import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vbiabyi_d.css';
import '../../css/b/b0js2ekqm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vbiabyi_d"/><path class="b0js2ekqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:speaker-one"} {...others} />);
}

export default Component;
