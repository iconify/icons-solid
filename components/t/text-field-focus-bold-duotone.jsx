import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w62m_bbfr.css';
import '../../css/x/x4376obid.css';
import '../../css/c/cv-snib_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w62m_bbfr"/><path class="x4376obid"/><path class="cv-snib_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-focus-bold-duotone"} {...others} />);
}

export default Component;
