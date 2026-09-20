import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/baqd6ablr.css';
import '../../css/z/zs13s_bpz.css';
import '../../css/u/u8u9_5smu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="baqd6ablr"/><circle class="zs13s_bpz"/><rect class="u8u9_5smu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-clock"} {...others} />);
}

export default Component;
