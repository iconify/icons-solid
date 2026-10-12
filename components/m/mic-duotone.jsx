import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1euu_nkh.css';
import '../../css/s/s930m50lb.css';
import '../../css/g/gq_3b3b8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v1euu_nkh"/><path class="s930m50lb"/><path class="gq_3b3b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mic-duotone"} {...others} />);
}

export default Component;
