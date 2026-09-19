import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ft8lohb2t.css';
import '../../css/g/gwjg53brw.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ft8lohb2t"/><path class="gwjg53brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:laptop"} {...others} />);
}

export default Component;
