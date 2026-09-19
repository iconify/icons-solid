import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/anrblq2of.css';
import '../../css/u/u90vnfbeh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="anrblq2of"/><path class="u90vnfbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:children-pyramid"} {...others} />);
}

export default Component;
