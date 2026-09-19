import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bspnmyb4c.css';
import '../../css/m/m_1-mhw8e.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="bi12bsetm"><path class="bspnmyb4c"/><path class="m_1-mhw8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:kette"} {...others} />);
}

export default Component;
