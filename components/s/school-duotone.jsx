import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2psbab_h.css';
import '../../css/h/hgyedcvco.css';
import '../../css/t/tkh4o4h-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w2psbab_h"/><path class="hgyedcvco"/><path clip-rule="evenodd" class="tkh4o4h-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:school-duotone"} {...others} />);
}

export default Component;
