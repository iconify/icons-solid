import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dh7z03bvs.css';
import '../../css/t/tthwrtzkx.css';
import '../../css/r/rt4cydqwb.css';
import '../../css/x/xhm_tdbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dh7z03bvs"/><path class="tthwrtzkx"/><circle class="rt4cydqwb"/><rect class="xhm_tdbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:images"} {...others} />);
}

export default Component;
