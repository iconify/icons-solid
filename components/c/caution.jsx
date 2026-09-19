import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z8_mqecnt.css';
import '../../css/y/ydag_ubap.css';
import '../../css/o/oe_umpfom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="z8_mqecnt"/><path class="ydag_ubap"/><path class="oe_umpfom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:caution"} {...others} />);
}

export default Component;
