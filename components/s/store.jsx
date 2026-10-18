import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6t3u2ggn.css';
import '../../css/g/glrgxcc8k.css';
import '../../css/b/bl3oy7cao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l6t3u2ggn"/><path class="glrgxcc8k"/><path class="bl3oy7cao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:store"} {...others} />);
}

export default Component;
