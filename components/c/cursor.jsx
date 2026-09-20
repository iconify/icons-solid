import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/g/g10zemb6e.css';
import '../../css/j/jn0k031ks.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="umm606kxf"><path class="g10zemb6e"/><path class="jn0k031ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:cursor"} {...others} />);
}

export default Component;
