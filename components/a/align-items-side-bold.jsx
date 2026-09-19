import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8x4powpe.css';
import '../../css/z/zn9fk2bza.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k8x4powpe"/><path class="zn9fk2bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-items-side-bold"} {...others} />);
}

export default Component;
