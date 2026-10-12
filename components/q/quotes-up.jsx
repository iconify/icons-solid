import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4zjkd5_z.css';
import '../../css/l/l3fb3pp0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s4zjkd5_z"/><path class="l3fb3pp0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:quotes-up"} {...others} />);
}

export default Component;
