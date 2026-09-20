import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i13u8jhwr.css';
import '../../css/n/n8nv_fb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i13u8jhwr"/><path class="n8nv_fb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:compass-off"} {...others} />);
}

export default Component;
