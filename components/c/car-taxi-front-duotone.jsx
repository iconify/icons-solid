import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hq5gbsb5w.css';
import '../../css/x/x123y0beo.css';
import '../../css/r/rmftuj1wn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hq5gbsb5w"/><path class="x123y0beo"/><path class="rmftuj1wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:car-taxi-front-duotone"} {...others} />);
}

export default Component;
