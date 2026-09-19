import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vjqi9gboy.css';
import '../../css/w/wrqafjrbc.css';
import '../../css/b/bun8441ri.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vjqi9gboy"/><path class="wrqafjrbc"/><path class="bun8441ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vacation"} {...others} />);
}

export default Component;
