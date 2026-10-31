import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mw0pqlb3s.css';
import '../../css/m/m84qzobnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mw0pqlb3s"/><path class="m84qzobnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:checks"} {...others} />);
}

export default Component;
