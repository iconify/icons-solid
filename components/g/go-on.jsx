import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kjfl4kbuv.css';
import '../../css/a/a273mvsrv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="kjfl4kbuv"/><path class="a273mvsrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:go-on"} {...others} />);
}

export default Component;
