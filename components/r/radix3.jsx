import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv28q8e_k.css';
import '../../css/t/txb6zsb2i.css';
import '../../css/d/dz4lf4bty.css';
import '../../css/e/e8a0pbj-n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jv28q8e_k"/><path class="txb6zsb2i"/><path class="dz4lf4bty"/><path class="e8a0pbj-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:radix3"} {...others} />);
}

export default Component;
