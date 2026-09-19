import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phws-gb1z.css';
import '../../css/i/ipwk0-b5k.css';
import '../../css/j/j9xzz1dcr.css';
import '../../css/a/aoos2jbko.css';
import '../../css/e/eieoiwbtb.css';
import '../../css/a/a1feo9hiu.css';
import '../../css/g/gbedz8b8k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="phws-gb1z"/><path clip-rule="evenodd" class="ipwk0-b5k"/><path clip-rule="evenodd" class="j9xzz1dcr"/><path class="aoos2jbko"/><path class="eieoiwbtb"/><path class="a1feo9hiu"/><path clip-rule="evenodd" class="gbedz8b8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:knive-fork-print"} {...others} />);
}

export default Component;
