import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw3kdccbv.css';
import '../../css/x/x6bs8y2ml.css';
import '../../css/p/pkviv2b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cw3kdccbv"/><path class="x6bs8y2ml"/><path class="pkviv2b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:popsicle-duotone"} {...others} />);
}

export default Component;
