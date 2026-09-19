import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1gp5-u1c.css';
import '../../css/m/myw_a-bni.css';
import '../../css/k/kb9eddb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r1gp5-u1c"/><path class="myw_a-bni"/><path class="kb9eddb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:store-duotone"} {...others} />);
}

export default Component;
