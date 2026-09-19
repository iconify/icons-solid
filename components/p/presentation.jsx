import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ji87fobic.css';
import '../../css/i/ijwx40j8g.css';

const viewBox = {"width":31,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ji87fobic"/><path class="ijwx40j8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:presentation"} {...others} />);
}

export default Component;
