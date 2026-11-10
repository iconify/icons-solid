import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrzt1zbgi.css';
import '../../css/m/m_r0vbq0f.css';
import '../../css/o/o85glehef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mrzt1zbgi"/><path class="m_r0vbq0f"/><circle class="o85glehef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bolt"} {...others} />);
}

export default Component;
