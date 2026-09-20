import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/jddmk_bdc.css';
import '../../css/o/ojsx_p6lu.css';
import '../../css/c/ceouy82kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="jddmk_bdc"/><path class="ojsx_p6lu"/><path class="ceouy82kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cloud-wifi"} {...others} />);
}

export default Component;
