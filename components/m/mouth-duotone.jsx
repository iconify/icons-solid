import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pveqmkqcn.css';
import '../../css/b/bovbhybjc.css';
import '../../css/c/cnxo92gjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pveqmkqcn"/><path class="bovbhybjc"/><path class="cnxo92gjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mouth-duotone"} {...others} />);
}

export default Component;
