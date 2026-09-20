import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vgoaambvi.css';
import '../../css/k/k0_cajbag.css';
import '../../css/l/ltk06_b4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vgoaambvi"/><path class="k0_cajbag"/><path class="ltk06_b4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:graduation-cap-flat"} {...others} />);
}

export default Component;
