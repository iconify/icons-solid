import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwc5gabwv.css';
import '../../css/t/tocuivfel.css';
import '../../css/n/ntdv43b1z.css';
import '../../css/k/k4ssgdc0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nwc5gabwv"/><circle class="tocuivfel"/><circle class="ntdv43b1z"/><path class="k4ssgdc0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-clock"} {...others} />);
}

export default Component;
