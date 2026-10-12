import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7r0mabud.css';
import '../../css/p/prh1rebpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d7r0mabud"/><path class="prh1rebpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:first-aid-kit"} {...others} />);
}

export default Component;
