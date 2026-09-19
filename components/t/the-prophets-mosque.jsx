import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8n_3jlct.css';
import '../../css/p/pll9h1b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n8n_3jlct"/><path class="pll9h1b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:the-prophets-mosque"} {...others} />);
}

export default Component;
