import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p8fq81dus.css';
import '../../css/q/q-2wnz6il.css';
import '../../css/k/k2uypbq3u.css';
import '../../css/f/f-v6f5bxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p8fq81dus"/><path class="q-2wnz6il"/><path class="k2uypbq3u"/><path class="f-v6f5bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:water-melon"} {...others} />);
}

export default Component;
