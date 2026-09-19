import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ni9p3zx4b.css';
import '../../css/e/e7ww275hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ni9p3zx4b"/><path class="e7ww275hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-liquid-1"} {...others} />);
}

export default Component;
