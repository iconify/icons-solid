import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhj0lixiu.css';
import '../../css/q/qpyo_f7ek.css';
import '../../css/z/z7bc25blt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lhj0lixiu"/><path class="qpyo_f7ek"/><path class="z7bc25blt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-add-duotone"} {...others} />);
}

export default Component;
