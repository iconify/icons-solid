import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xhm_tdbwp.css';
import '../../css/x/xcp1ycc0a.css';
import '../../css/c/cwoxs8bss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="xhm_tdbwp"/><circle class="xcp1ycc0a"/><path class="cwoxs8bss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:images"} {...others} />);
}

export default Component;
