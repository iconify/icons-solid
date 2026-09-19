import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vqxtmc9iw.css';
import '../../css/l/lnr6n0bgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vqxtmc9iw"/><path class="lnr6n0bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:minus-the-top"} {...others} />);
}

export default Component;
