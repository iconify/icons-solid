import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4aw46bgq.css';
import '../../css/c/cin6o6p9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f4aw46bgq"/><path class="cin6o6p9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-plus-duotone"} {...others} />);
}

export default Component;
