import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7o7qmozg.css';
import '../../css/u/unjzoervv.css';
import '../../css/o/osh821bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j7o7qmozg"/><path class="unjzoervv"/><path class="osh821bmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rectangle-circle-duotone"} {...others} />);
}

export default Component;
