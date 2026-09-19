import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atr1jk6xp.css';
import '../../css/c/cp84uccue.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="atr1jk6xp"/><path clip-rule="evenodd" class="cp84uccue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:underweight"} {...others} />);
}

export default Component;
