import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nopuubb8w.css';
import '../../css/x/xke9tubde.css';
import '../../css/c/c86udab-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nopuubb8w"/><path class="xke9tubde"/><path class="c86udab-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-location"} {...others} />);
}

export default Component;
