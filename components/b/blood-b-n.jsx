import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivgjj6_5c.css';
import '../../css/r/rxaqa1ufk.css';
import '../../css/k/ks-hkhxjv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ivgjj6_5c"/><path class="rxaqa1ufk"/><path clip-rule="evenodd" class="ks-hkhxjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-b-n"} {...others} />);
}

export default Component;
