import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6wergbzn.css';
import '../../css/q/q9u3ezbxo.css';
import '../../css/j/jbbepsbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t6wergbzn"/><path class="q9u3ezbxo"/><path class="jbbepsbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast-2-expressive"} {...others} />);
}

export default Component;
