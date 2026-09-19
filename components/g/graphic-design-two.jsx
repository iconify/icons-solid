import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/br0c_qbar.css';
import '../../css/g/grskm8s8b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="br0c_qbar"/><path clip-rule="evenodd" class="grskm8s8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:graphic-design-two"} {...others} />);
}

export default Component;
