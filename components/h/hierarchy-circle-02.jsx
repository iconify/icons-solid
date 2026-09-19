import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gglsf5jgx.css';
import '../../css/k/kxe36xeye.css';
import '../../css/k/kc3talsdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gglsf5jgx"/><path class="kxe36xeye"/><path class="kc3talsdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-circle-02"} {...others} />);
}

export default Component;
