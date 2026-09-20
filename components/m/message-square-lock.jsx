import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu8vrib5p.css';
import '../../css/w/wslrsl6lx.css';
import '../../css/b/bh4r24j1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eu8vrib5p"/><path class="wslrsl6lx"/><rect class="bh4r24j1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-lock"} {...others} />);
}

export default Component;
