import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dkbc58bxi.css';
import '../../css/b/bzg4jxbcx.css';
import '../../css/h/h3zgu7-gy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dkbc58bxi"/><path clip-rule="evenodd" class="bzg4jxbcx"/><path class="h3zgu7-gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:globe"} {...others} />);
}

export default Component;
