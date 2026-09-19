import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsc1-icia.css';
import '../../css/o/o_xh9pc1a.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qsc1-icia"/><path class="o_xh9pc1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:book-open"} {...others} />);
}

export default Component;
