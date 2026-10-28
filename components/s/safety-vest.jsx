import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh2uadd-a.css';
import '../../css/i/i3n_dc98i.css';
import '../../css/m/mtbep6bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mh2uadd-a"/><path class="i3n_dc98i"/><path class="mtbep6bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:safety-vest"} {...others} />);
}

export default Component;
