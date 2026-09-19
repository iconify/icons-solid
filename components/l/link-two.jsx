import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zxrxabb7c.css';
import '../../css/a/ajq-sm9bk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zxrxabb7c"/><path class="ajq-sm9bk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:link-two"} {...others} />);
}

export default Component;
