import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/laria4ctv.css';
import '../../css/o/ok8zy_hac.css';
import '../../css/g/goi7h-9jx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="laria4ctv"/><path clip-rule="evenodd" class="ok8zy_hac"/><path class="goi7h-9jx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:test-tube"} {...others} />);
}

export default Component;
