import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/er9262b4y.css';
import '../../css/g/g1efina1z.css';
import '../../css/o/o0ed_gcnp.css';
import '../../css/o/o522zca7e.css';
import '../../css/t/tco6ifb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="er9262b4y"/><path class="g1efina1z"/><path class="o0ed_gcnp"/><path class="o522zca7e"/><path class="tco6ifb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-reference"} {...others} />);
}

export default Component;
