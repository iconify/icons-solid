import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rn9qglbrb.css';
import '../../css/l/l9zy78bvf.css';
import '../../css/r/r4a2qqbdi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rn9qglbrb"/><path class="l9zy78bvf"/><path class="r4a2qqbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:classical-building"} {...others} />);
}

export default Component;
