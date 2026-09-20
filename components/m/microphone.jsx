import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnatn192d.css';
import '../../css/d/dn7qjhb5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tnatn192d"/><path clip-rule="evenodd" class="dn7qjhb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:microphone"} {...others} />);
}

export default Component;
