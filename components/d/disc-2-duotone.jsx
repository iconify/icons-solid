import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukp0h0bby.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/e/e5k5xe6px.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ukp0h0bby"/><path class="g4vvtk_cw"/><path class="e5k5xe6px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:disc-2-duotone"} {...others} />);
}

export default Component;
