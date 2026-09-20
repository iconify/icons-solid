import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e9kwfkb1m.css';
import '../../css/d/dt0bl8yvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e9kwfkb1m"/><path class="dt0bl8yvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:landscape-2"} {...others} />);
}

export default Component;
