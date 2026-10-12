import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6uzpybyf.css';
import '../../css/p/phm_mqkqd.css';
import '../../css/w/w6pvigl7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i6uzpybyf"/><path class="phm_mqkqd"/><path class="w6pvigl7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radio-receiver-duotone"} {...others} />);
}

export default Component;
