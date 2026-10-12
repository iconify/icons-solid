import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9xb8t5ip.css';
import '../../css/t/tk37sebgg.css';
import '../../css/a/a-ctiyb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j9xb8t5ip"/><path class="tk37sebgg"/><path class="a-ctiyb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brush-cleaning-duotone"} {...others} />);
}

export default Component;
