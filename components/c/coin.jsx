import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdoa3kqmg.css';
import '../../css/g/g2l8iqnuw.css';
import '../../css/o/or9nmxbka.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pdoa3kqmg"/><path class="g2l8iqnuw"/><path class="or9nmxbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:coin"} {...others} />);
}

export default Component;
