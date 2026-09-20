import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxm4exb-m.css';
import '../../css/o/o1kkk1b6e.css';
import '../../css/h/h8wwunb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oxm4exb-m"/><path class="o1kkk1b6e"/><path class="h8wwunb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-bold"} {...others} />);
}

export default Component;
