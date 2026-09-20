import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/za76leb5k.css';
import '../../css/y/yis5bcb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="za76leb5k"/><path class="yis5bcb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:hand-pointer-event"} {...others} />);
}

export default Component;
