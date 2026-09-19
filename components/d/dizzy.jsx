import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/saroqnbar.css';
import '../../css/y/yzptmubja.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="saroqnbar"/><path clip-rule="evenodd" class="yzptmubja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dizzy"} {...others} />);
}

export default Component;
