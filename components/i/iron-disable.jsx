import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/ln41zjkly.css';
import '../../css/f/f6c0wnbzz.css';
import '../../css/i/igx57ccmj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ln41zjkly"/><circle class="f6c0wnbzz"/><path class="igx57ccmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:iron-disable"} {...others} />);
}

export default Component;
