import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i74ahcw-i.css';
import '../../css/c/cox-zxd7x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i74ahcw-i"/><path class="cox-zxd7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-suit"} {...others} />);
}

export default Component;
