import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i--o-zb7z.css';
import '../../css/f/f6c0wnbzz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i--o-zb7z"/><circle class="f6c0wnbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stamp"} {...others} />);
}

export default Component;
