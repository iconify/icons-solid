import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxn3b2laz.css';
import '../../css/k/k71chflfg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="fxn3b2laz"/><path class="k71chflfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-in-suit-levitating"} {...others} />);
}

export default Component;
